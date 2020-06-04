'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments()
      table.string('country', 2).notNullable()
      table.string('city', 254).notNullable()
      table.string('latitude', 254).notNullable()
      table.string('longitude', 254).notNullable()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = UserSchema
