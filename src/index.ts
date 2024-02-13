const allUsers = [] //todos os usuários do github

interface GithubUser {
    id: number;
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string
}

document.querySelector('#search-users-btn').addEventListener('click', (ev) => {
    ev.preventDefault()
    const userToSearch: string = document.querySelector('#input-username').value
    getUser(userToSearch)
    //ideia: esta função deve retornar um card com as informações do usuário,
    //este card deve ter um botão para salvar o usuário.
})

async function getUser(userToSearch:string) {
    const response = await fetch(`https://api.github.com/users/${userToSearch}`)
    const user = await response.json()
    if(!user){
        return console.log(Promise.reject('Usuário não encontrado'))
    }

    const gitUser: GithubUser = {
        id: user.id,
        login: user.login,
        name: user.name,
        bio: user.bio,
        public_repos: user.public_repos,
        repos_url: user.repos_url
    }

    allUsers.push(gitUser)
    return console.log(allUsers)
}


document.querySelector('#show-all-users-btn').addEventListener('click', (ev) => {
    ev.preventDefault()
    showAllUser()
})

function showAllUser() {
    console.log('Exibindo usuários')
    let returnMessage: string = ``

    for (let i: number = 0; i < allUsers.length; i++) {
        returnMessage += `Nome: ${allUsers[i].name}\n`+
                        `Bio: ${allUsers[i].bio}\n\n`
    }
    return console.log(returnMessage)
}

function sumRepos() {
    const reduceRepos = allUsers.reduce((repos, currentUser, public_repos) => repos + currentUser.public_repos, 0)
    return console.log(reduceRepos)
}

function searchUser(username: string) {
    const userExists = allUsers.find((user) => user.login == username)
    
    if (!userExists) {
        return console.log('Não existe nenhum usuário na base de dados com o username informado')
    }else{
        return console.log(`${userExists.name}\n${userExists.login}\n${userExists.bio}`)
    }
}

// function topFiveUsers() {
//     let i: number = 0
//     let top5 = []
//     for (let i: number = 0; i < allUsers.length; i++) {
//         top5.push(allUsers[i])
//     }

//     for (i < top5.length-1; i++;) {
//         if (top5[i].public_repos < allUsers[i+1].public_repos) {
//             top5.splice(i,i, allUsers[i+1])
//             top5.splice(i++,i++, allUsers[i])
//         }
//     }

//     console.log(top5)
//     console.log(allUsers)
// }

function topFiveUsers() {
    allUsers.sort((leftUser, rightUser) => {
        if (leftUser.public_repos > rightUser.public_repos) return -1
        if (leftUser.public_repos < rightUser.public_repos) return 1
    })
    return console.log(allUsers)
}