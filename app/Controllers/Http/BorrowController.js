'use strict'
const Borrow = use('App/Models/Borrow')
const User = use('App/Models/User')
const Author = use('App/Models/Author ')
const Category = use('App/Models/Category')
const Title = use('App/Models/Category')

class BorrowController {
  borrow({
    auth,
    request,
    response,
    params: {
      id
    }
  }) {
    const user = auth.currentUser.id
  }
}

module.exports = BorrowController
