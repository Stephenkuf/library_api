'use strict'
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    auth,
    response,
  }, next) {
    try {
      // we get the currently signed in user
      const authenticatedUser = await auth.getUser()

      //role 2 is for the admin , if not admin , then those operations cant be performed 
      if (authenticatedUser.role_id === 2) {
        await next()

      } else {
        response.status(401).json({
          status: "Unauthorized",
          message: "Unauthorized Access",
          status_code: 401
        })

      }
    } catch (error) {
      response.status(400).json({
        message: 'There was an error ',
        data: error
      })
    }
    // call next to advance the request
  }
}

module.exports = Admin
