# Node.js com serverless framework

> Este é o projeto de exemplo do curso [Node.js com serverless framework](tbd) da Alura.

## Executando localmente

O projeto foi feito da forma mais simples possível para facilitar o uso. Não foram usados nenhum framework ou biblioteca para o front-end.

O projeto roda simultaneamente localmente e no ambiente do AWS lambda. Você pode executar a API offline usando o comando:

```bash
npm run dev
```

Ou, você pode rodar localmente tanto a interface quanto a API usando o comando:

```bash
npm run start
```

Depois de executar o projeto, você pode acessar a aplicação em `http://localhost:8089` e a api estará disponível em `http://localhost:3000`.

## Deploy Produção
  - Criar o porjeto no Serverless Dashboard
  - Criar banco de dados em um provedor de MongoDB. Por exemplo MongoDB Atlas
  - Incluir as variáveis de ambiente das configurações do projeto do arquivo `serverless.yml` no Serverless Dashboard
  - Executar o comando abaixo
```bash
npm run prod
```
## Remover ProdPorjeto da AWS
  - Executar o comando abaixo para remover todos os recursos alocados na AWS
```bash
npm run remove-prod
```
  - Remover o porjeto no Serverless Dashboard somente após remover todos os recursos da AWS