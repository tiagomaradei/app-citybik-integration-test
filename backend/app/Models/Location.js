'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Location extends Model {
  static get table() {
    return 'locations'
  }

  stations() {
    return this.hasMany('App/Models/Station', 'id', 'id_location')
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Location
