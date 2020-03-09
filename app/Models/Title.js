'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Title extends Model {
    authors(){
        return this.belongsTo('App/Models/Author')
    }
    categories(){
        return this.belongsTo('App/Models/Category')
    }

}

module.exports = Title
