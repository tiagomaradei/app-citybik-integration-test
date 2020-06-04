'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Station extends Model {
  static get table() {
    return 'stations'
  }

  location() {
    return this.belongsTo('App/Models/Location', 'id', 'id_location')
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Station
