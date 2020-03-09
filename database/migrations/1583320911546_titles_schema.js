'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TitlesSchema extends Schema {
  up () {
    this.create('titles', (table) => {
      table.increments()
      table.string('title_name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('titles')
  }
}

module.exports = TitlesSchema
