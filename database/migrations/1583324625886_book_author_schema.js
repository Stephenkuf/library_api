'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookAuthorSchema extends Schema {
  up () {
    this.create('book_authors', (table) => {
      table.increments()
      table.integer('book_id')
      table.integer('author_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_authors')
  }
}

module.exports = BookAuthorSchema
