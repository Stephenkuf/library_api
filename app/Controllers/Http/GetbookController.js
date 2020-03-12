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

  async getSingleTitle({
    auth,
    params: {
      id
    },
    response
  }) {
    try {
      const bookData = await Title.find(id)

      if (bookData) {
        response.status(200).json({
          status: 'Success',
          data: bookData

        })
      } else {
        response.json({
          message: 'Book not found, Check the ID and try again'
        })
      }

    } catch (error) {
      response.status(400).jon({
        status: 'Error',
        error
      })
    }
  }

  //   end of get title and get all title controllers 

  async getCategories({
    auth,
    response
  }) {

    try {
      const bookData = await Category.all()

      response.status(200).json({
        message: 'Here are the book Categories avalaible',
        bookData
      })
    } catch (error) {
      response.status(400).json({
        message: 'There was an error fetching the Categories',
        bookData
      })
    }
  }

  async getSingleCategory({
    auth,
    params: {
      id
    },
    response
  }) {
    try {
      const bookData = await Category.find(id)

      if (bookData) {
        response.status(200).json({
          status: 'Success',
          data: bookData

        })
      } else {
        response.json({
          message: 'Book not found, Check the ID and try again'
        })
      }

    } catch (error) {
      response.status(400).jon({
        status: 'Error',
        error
      })
    }
  }

  //   end of get all category and get Single Category 

  async getAuthors({
    auth,
    response
  }) {

    try {
      const bookData = await Author.all()

      response.status(200).json({
        message: 'Here are the book Categories avalaible',
        bookData
      })
    } catch (error) {
      response.status(400).json({
        message: 'There was an error fetching the Categories',
        bookData
      })
    }
  }

  async getSingleAuthor({
    auth,
    params: {
      id
    },
    response
  }) {
    try {
      const bookData = await Author.find(id)

      if (bookData) {
        response.status(200).json({
          status: 'Success',
          data: bookData

        })
      } else {
        response.json({
          message: 'Book not found, Check the ID and try again'
        })
      }

    } catch (error) {
      response.status(400).jon({
        status: 'Error',
        error
      })
    }
  }





}

module.exports = GetbookController
