'use strict'
const Title = use('App/Models/Title')
const Author = use('App/Models/Author')
const Category = use('App/Models/Category')
const User = use('App/Models/User')
const Book = use('App/Models/Book')


class BookController {
    async createBook({ auth , request , response }){
      try {
            // get current user (admin)
        // const user  = auth.current.user





        //get information of book 
        const{
            title_name, 
            author_name,
            category_name,
            no_of_copies

        } = request.all()
        console.log(request.all());
        
        
        const title = await Title.findOrCreate({title_name} , {title_name});
        const author = await Author.findOrCreate({author_name},{author_name});
        const category = await Category.findOrCreate({category_name}, {category_name});


        // console.log(' >> ,', title.id)
        
        const book = await Book.findOrCreate(
            {
             title_id:title.id,
             author_id: author.id,
             category_id: category.id,
             total_copies : no_of_copies

            },
            { 
               title_id:title.id,
               author_id: author.id,
               category_id: category.id,
               total_copies : no_of_copies

            }
        )

        response.status(200).json({
            message:'A Book has been created',
            data:book
        })

          
      } catch (error) {
          console.log(error)        
          
      }
    }

    async editBook({}){
        
    }

    async deleteBook({}){
        
    }
}

module.exports = BookController
