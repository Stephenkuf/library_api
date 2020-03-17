'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BorrowSchema extends Schema {
  up() {
    this.create('borrows', (table) => {
      table.increments()
      table.string('book_id').notNullable()
      table.string('student_id').notNullable()
      table.string('staff_id')
      table.integer('number_borrowed')
      table.timestamps()
    })
  }

  down() {
    this.drop('borrows')
  }
}

module.exports = BorrowSchema
