'use strict'
const Title = use("App/Models/Title");
const Author = use("App/Models/Author");
const Category = use("App/Models/Category");
const User = use("App/Models/User");
const Book = use("App/Models/Book");

class GetbookController {
  async getTitle({
    auth,
    response
  }) {

    try {
      const bookData = await Title.all()

      response.status(200).json({
        message: 'Here are the book Titles avalaible',
        bookData
      })
    } catch (error) {
      response.status(400).json({
        message: 'There was an error fetching the books',
        bookData
      })
    }
  }
}

module.exports = GetbookController
