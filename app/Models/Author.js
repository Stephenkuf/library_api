'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
    title(){
        return this.hasMany('App/Models/Title')
    }
    books(){
        return this.belongsToMany('App/Models/Book').pivotTable('book_author')
    }
}

module.exports = Author
