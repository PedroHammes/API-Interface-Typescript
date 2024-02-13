Meu objetivo foi criar um arquivo TS com as funções listadas abaixo. Utilizei interfaces para tipar as respostas das requisições.

1. Uma função que recebe um nome de usuário do GitHub e realiza uma requisição GET para obter os dados dele através da API pública do GitHub.
    1. A requisição deve ser feita através da seguinte URL:
        
        `https://api.github.com/users/<nome_do_usuario>`
        
    2. **Dica**: utilize a própria API fetch do javascript
    3. **Dica**: Ao usar o fetch o retorno será uma Response (pode ser percebido com a ajuda do TS) que ainda precisa ser convertida para json. Isso pode ser obtido com a ajuda do método .json(), que retorna uma Promise.
    4. De todos os dados retornados nós utilizaremos apenas os seguintes:
        - `**id**`, tipo number
        - `**login**`, tipo string
        - `**name**`, tipo string
        - `**bio**`, tipo string
        - `**public_repos**`, tipo number
        - `**repos_url**`, tipo string
    5. **Dica**: para validação, caso o usuário não seja encontrado no github o retorno da API será um objeto:
        
        ```tsx
        {message: "Not Found"}
        ```
        
    6. O usuário retornado deverá ser salvo em uma lista que conterá todos os usuários
2. Uma função que mostra as informações salvas de um determinado usuário e alguns de seus repositórios públicos.
    1. A requisição deve ser feita através da URL salva na propriedade repos_url
    2. O retorno da API será um array de repositórios
    3. De todos os dados dos repositórios retornados nós exibiremos apenas os seguintes:
        - `**name**`, tipo string
        - `**description**`, tipo string
        - `**fork**`, tipo boolean
        - `**stargazers_count**`, tipo number
3. Função que mostra todos os usuários salvos.
4. Função que calcula a soma de repositórios dos usuários salvos na lista e mostra o resultado.
5. Uma função que mostre o top cinco de usuários com maior número de repositórios públicos (nome e quantidade)





    
    ```tsx
    {exercício_proposto_por: "One Bit Code"}
    ```