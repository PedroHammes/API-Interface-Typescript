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
    let node = document.getElementById('#81041208');
    document.querySelector('#user-section').removeChild(node);
    showAllUser();
});
function showAllUser() {
    for (let i = 0; i < allUsers.length; i++) {
        createCard(allUsers[i]);
    }
}
function createCard(user) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    div.id = user.id.toString();
    h3.innerText = user.name;
    p.innerText = user.bio;
    div.appendChild(h3);
    div.appendChild(p);
    document.querySelector('#user-section').append(div);
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
