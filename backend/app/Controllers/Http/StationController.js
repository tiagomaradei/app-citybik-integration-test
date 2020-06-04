'use strict'

const Location = use('App/Models/Location');

class StationController {
  async index ({ request, response }) {
    const { id } = request.params;
    const location =  await Location.find(id);
    await location.loadMany(['stations']);
    response.json({ location });
  }
}

module.exports = StationController
