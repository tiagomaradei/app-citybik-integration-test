'use strict'

const axios = require('axios');
const apiURL = 'http://api.citybik.es/v2/networks';
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "decathlon-db",
  port: 3306,
  user: "root",
  password: "secret",
  database: "citybikes"
});

con.connect();

async function PopulateDB(con) {

  await con.query('SET FOREIGN_KEY_CHECKS = 0');
  await con.query('TRUNCATE TABLE stations');
  await con.query('TRUNCATE TABLE locations');
  await con.query('SET FOREIGN_KEY_CHECKS = 1');

  console.info(`Iniciando integração com a API ${apiURL} para popular a base de dados`);

  const routesBikes = [
    'ciclosampa',
    'bikerecife',
    'bikerio',
    'bikesalvador',
    'bikepoa',
    'integrabike',
    'rivibike',
    'dukebike',
    'bikebh',
    'bikepetrolina',
    'bikebrasilia',
    'debikegoiania',
    'bicicletar',
    'cajubike',
    'bikebelem',
    'bikesantos',
  ];

  for (const route of routesBikes) {

    console.info(`[${route}] - Iniciando inserção dos dados`);

    try {
      const response = await axios.get(`${apiURL}/${route}`);
      const { city, country, latitude, longitude } = response.data.network.location;
      const { stations } = response.data.network;

      const SQL = `
        INSERT INTO
        locations
        VALUES (
          NULL,
          '${country}',
          '${city}',
          '${latitude}',
          '${longitude}'
        )
      `;

      con.query(SQL, async (err, result) => {

        const { insertId } = result;

        for (const stationData of stations) {
          const {
            name,
            id: slug,
            empty_slots,
            free_bikes,
            latitude: stationLatitude,
            longitude: stationLongitude
          } = stationData;

          const SQLstations = `
            INSERT INTO
            stations
            VALUES (
              NULL,
              '${insertId}',
              '${name.trim().replace("'", '')}',
              '${slug.trim()}',
              '${empty_slots}',
              '${free_bikes}',
              '${stationLatitude}',
              '${stationLongitude}'
            )
          `;

          await con.query(SQLstations);
        }
      });

      console.info(`[${route}] - Dados inseridos com sucesso`);
    } catch(err) {
      console.error(`[${route}] - Erro ao inserir dados`)
    }
  }
}

PopulateDB(con).then(() => {
  con.destroy();
  console.log('Base populada com sucesso');
}).catch(err => {
  console.error(err);
});
