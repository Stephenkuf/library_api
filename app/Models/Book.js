'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
    borrows(){
        return this.hasMany('App/Models/Borrow')
    }
    authors(){
        return this.belongsToMany('App/Models/Author').pivotTable('book_author')
    }
}

module.exports = Book
