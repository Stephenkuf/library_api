'use strict'
const Title = use('App/Models/Title')
const Author = use('App/Models/Author')
const Category = use('App/Models/Category')
const User = use('App/Models/User')
const Book = use('App/Models/Book')


class BookController {
  async createBook({
    auth,
    request,
    response
  }) {
    try {
      // get current user (admin)
      // const user  = auth.current.user

      //get information of book 
      const {
        title_name,
        author_name,
        category_name,
        no_of_copies

      } = request.all()

      console.log(request.all());


      const title = await Title.findOrCreate({
        title_name
      }, {
        title_name
      });
      const author = await Author.findOrCreate({
        author_name
      }, {
        author_name
      });
      const category = await Category.findOrCreate({
        category_name
      }, {
        category_name
      });


      // console.log(' >> ,', title.id)

      const book = await Book.findOrCreate({
        title_id: title.id,
        author_id: author.id,
        category_id: category.id,
        total_copies: no_of_copies

      }, {
        title_id: title.id,
        author_id: author.id,
        category_id: category.id,
        total_copies: no_of_copies

      })

      response.status(200).json({
        message: 'A Book has been created',
        data: book
      })


    } catch (error) {
      console.log(error)

    }
  }

  async updateBook({
    auth,
    response,
    request,
    params: {
      id
    }
  }) {

    try {
      const {
        title_name,
        author_name,
        category_name,
        no_of_copies
      } = request.all()


      const book = await Book.findBy("id", id)

      if (book) {
        const book_title = await Title.findBy('id', book.title_id)
        book_title.title_name = title_name
        await book_title.save()

        const book_author = await Author.findBy('id', book.author_id)
        book_author.author_name = author_name
        await book_author.save()

        const book_category = await Category.findBy('id', book.category_id)
        book_category.category_name = category_name
        await book_category.save()


        book.total_copies = no_of_copies
        await book.save()

        response.status(200).json({
          message: 'Book has been updated ',
        })
      }
    } catch (error) {
      response.status(400).json({
        message: 'there was an error updating , Try again',
        error
      })
      console.log(error);

    }
  }


  async deleteBook({
    auth,
    response,
    params: {
      id
    }
  }) {

    try {
      const book = await Book.findBy('id', id)

      if (book) {
        const book_title = await Title.findBy('id', book.title_id)
        await book_title.delete()

        await book.delete()



        response.status(200).json({
          message: 'Book Deleted Successfully '
        })
      } else {
        response.json({
          message: 'Book not found'
        })
      }


    } catch (error) {
      response.status(400).json({
        message: 'There was an error deleting the book',
        error
      })

      console.log(error);


    }

  }

}

module.exports = BookController
