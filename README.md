# Cat API Case

Essa solução recupera dados da API oficial: [Cats](https://thecatapi.com/).

<img src="./architSoft.JPG" alt="desenho da arquitetura">

> Recupera dados da API original e manipula eles. Arquitetura baseada em um sistema 'Cliente-Server', além de ser uma aplicação monolítica.

Documentação da API do projeto: [Docs](https://documenter.getpostman.com/view/21008445/Uyxkijry).

### Ajustes, Melhorias e Implementações:

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Tarefa 1
- [x] Tarefa 2
- [x] Tarefa 3
- [] Tarefa 4
- [ ] Tarefa 5

## Instalando

Para instalar, siga estas etapas:

Na raiz do projeto, realize o seguinte comando:
```
npm i
```
Na sequência, realize os seguintes comandos:
```
docker build -t api-case/ariel .
```
```
docker run -p 4004:4004 -d api-case/ariel
```
docker-compose up

## ☕ Usando a aplicação:

Para usar, siga estas etapas:

Em um terminal, insira esses comandos:
```
docker-compose up -d --build
```
Após a inicialização:
```
npm start
```

Em um outro terminal, insira esse comando:
```
npm run start-db  ou  npm start-db
```

[⬆ Voltar ao topo](#Cat-API-Case)<br>