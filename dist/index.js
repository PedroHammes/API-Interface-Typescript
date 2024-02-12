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
    //para cada usuário do array, chama a função de criar card de usuário.
}
function createUserCard(gitUser) {
    //cria um card para o usuário informado como parâmetro
    const card = document.createElement('div');
    const name = document.createElement('h3');
    const bio = document.createElement('p');
    name.innerHTML = gitUser.name;
    bio.innerHTML = gitUser.bio;
}
