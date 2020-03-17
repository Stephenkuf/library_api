'use strict'
const Borrow = use('App/Models/Borrow')
const User = use('App/Models/User')
const Book = use('App/Models/Book')


class BorrowController {
  async borrow({
    auth,
    request,
    response,
    params: {
      id
    }
  }) {

    try {
      const student = await auth.getUser()
      const {
        numberBorrowed
      } = request.post()

      const book = await Book.findBy('id', id)
      if (book) {
        const borrowed = await Borrow.findOrCreate({
          'book_id': book.id,
          'student_id': student.id,
          'number_borrowed': numberBorrowed
        }, {
          'book_id': book.id,
          'student_id': student.id,
          'number_borrowed': numberBorrowed

        })
        return response.status(200).json({
          message: 'Book has been borrowed',
          status: "success"
        })
      } else {
        response.status(400).json({
          message: 'Book not found'
        })
      }

    } catch (error) {
      console.log(error)
      return response.status({
        message: 'There was an error',
      })
    }




  }
}

module.exports = BorrowController
