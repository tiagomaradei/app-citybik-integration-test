'use strict'

const Location = use('App/Models/Location');

class LocationController {
  async index ({ response }) {
    const locations = await Location.all();
    response.json(locations);
  }
}

module.exports = LocationController
