# laravel-integration-test

## O Desafio

Faça uma aplicação que tenha integração com a API CityBikes https://api.citybik.es/v2/ para cumprir os seguintes requisitos:

### 1) Armazenar os principais dados no Banco de Dados

### 2) O usuário deverá visualizar todos os pontos de disponíveis no Brasil
Interface:  Tabela dos Pontos de Bicicletas Compartilhadas disponíveis no Brasil
Colunas: 
  - Nome do Local
  - Localização (Cidade/País)
  - Quantidade de Bicicletas disponíveis

### 3) O usuário poderá buscar por nome ou cidade
Interface: Resultado de busca em tabela

### 4) Bônus: Encontrar o local mais próximo
Interface: Resultado de busca em tabela


## Linguagem e bibliotecas para resolver o problema

  - PHP 7
  - Framework Laravel >= 5.4
  - PostgreSQL >= 9.4 ou MySQL 5.x.x
  - Bootstrap v3.x.x
  - JQuery, Vue.js, Angular2 ou React (aberto)


## Rodando o Código
- Enviar o link com os códigos ou o link do git para ser clonado

- Entrar na pasta do projeto

```sh
$ composer update
```

```sh
$ php artisan migrate
```

```sh
$ php artisan serve --port=8000
```

- Acessar ```localhost:8000```

