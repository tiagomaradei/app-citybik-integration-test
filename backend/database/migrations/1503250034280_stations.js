'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('stations', (table) => {
      table.increments()
      table.integer('id_location').unsigned().references('id').inTable('locations')
      table.string('name', 254).notNullable()
      table.string('slug', 254).notNullable()
      table.integer('empty_slots').notNullable()
      table.integer('free_bikes').notNullable()
      table.string('latitude', 254).notNullable()
      table.string('longitude', 254).notNullable()
    })
  }

  down () {
    this.drop('stations')
  }
}

module.exports = TokensSchema
