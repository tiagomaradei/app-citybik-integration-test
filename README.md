O sistema está separado em 3 containers:
 - **DB**: Banco de dados da aplicação em MySQL
 - **Backend**: API da aplicação em Adonis
 - **Frontend**: Front da aplicação em React com Typescript

A Base de dados da aplicação pega as informações de estações de bikes no Brasil através da API [http://api.citybik.es/v2/networks](http://api.citybik.es/v2/networks), as rotas usadas para popular as base são:

```sh
ciclosampa
bikerecife
bikerio
bikesalvador
bikepoa
integrabike
rivibike
dukebike
bikebh
bikepetrolina
bikebrasilia
debikegoiania
bicicletar
cajubike
bikebelem
bikesantos
```

### Instalação:

A instalação depende dos pacotes [docker-compose](https://docs.docker.com/compose/install/) e [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) instalados na máquina local.

### Banco de dados
```sh
$ cd db
$ sudo docker-compose up --build -d
```

### Backend 

Acessível pela porta 3333.

```sh
$ cd backend
```

Abrir o arquivo `.env.example` e salvar como `.env`, feito isso rodar os comandos:

```sh
$ yarn
$ sudo docker-compose up --build -d
```

**Obs: Ao fazer o build o sistema roda as migrations e popula a base de dados com todas estações de bikes.**

### Frontend

Acessível pela porta 3000.

```sh
$ cd frontend
$ yarn
$ sudo docker-compose up --build -d
```

Acessar no navegador http://localhost:3000 

### Testes

Para rodar os testes, executar o comando:

```sh
$ sudo /usr/bin/docker exec -i decathlon-backend /bin/sh -c "yarn test"
```