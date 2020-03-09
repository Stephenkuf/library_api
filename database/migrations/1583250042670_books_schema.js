'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.integer('book_id')
      table.integer('category_id')
      table.integer('title_id')
      table.integer('author_id')
      table.integer('volume')
      table.integer('total_copies')
      table.integer('remaining_copies')
      table.timestamps()      
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
