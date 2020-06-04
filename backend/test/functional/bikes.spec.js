'use strict'

const { test, trait } = use('Test/Suite')('Bikes')

trait('Test/ApiClient')

test('should be able to get list of locations', async ({ client }) => {

  const response = await client.get('/locations').end();

  response.assertStatus(200);
  response.assertJSONSubset([{
    id: 1,
    country: 'BR'
  }]);
})

test('should be able to get list of stations from a location', async ({ client, assert }) => {

  const response = await client.get('/location/1/stations').end();

  response.assertStatus(200);
  assert.equal(response.body.location.stations[0].id, 1);
})
