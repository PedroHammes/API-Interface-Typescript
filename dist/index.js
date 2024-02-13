const allUsers = []; //todos os usuários do github
document.querySelector('#search-users-btn').addEventListener('click', (ev) => {
    ev.preventDefault();
    const userToSearch = document.querySelector('#input-username').value;
    getUser(userToSearch);
    //ideia: esta função deve retornar um card com as informações do usuário,
    //este card deve ter um botão para salvar o usuário.
});
async function getUser(userToSearch) {
    const response = await fetch(`https://api.github.com/users/${userToSearch}`);
    const user = await response.json();
    if (!user) {
        return console.log(Promise.reject('Usuário não encontrado'));
    }
    const gitUser = {
        id: user.id,
        login: user.login,
        name: user.name,
        bio: user.bio,
        public_repos: user.public_repos,
        repos_url: user.repos_url
    };
    allUsers.push(gitUser);
    return console.log(allUsers);
}
document.querySelector('#show-all-users-btn').addEventListener('click', (ev) => {
    ev.preventDefault();
    showAllUser();
});
function showAllUser() {
    console.log('Exibindo usuários');
    let returnMessage = ``;
    for (let i = 0; i < allUsers.length; i++) {
        returnMessage += `Nome: ${allUsers[i].name}\n` +
            `Bio: ${allUsers[i].bio}\n\n`;
    }
    return console.log(returnMessage);
}
function sumRepos() {
    const reduceRepos = allUsers.reduce((repos, currentUser, public_repos) => repos + currentUser.public_repos, 0);
    return console.log(reduceRepos);
}
function searchUser(username) {
    const userExists = allUsers.find((user) => user.login == username);
    if (!userExists) {
        return console.log('Não existe nenhum usuário na base de dados com o username informado');
    }
    else {
        return console.log(`${userExists.name}\n${userExists.login}\n${userExists.bio}`);
    }
}
function topFiveUsers() {
    allUsers.sort((leftUser, rightUser) => {
        if (leftUser.public_repos > rightUser.public_repos)
            return -1;
        if (leftUser.public_repos < rightUser.public_repos)
            return 1;
    });
    return console.log(allUsers);
}
