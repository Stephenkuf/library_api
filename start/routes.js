'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Welcome to the Library Applicaiton API'
  }
})
Route.post('/register', 'UserController.register')
Route.get('register/confirm/:token', 'UserController.confirmEmail')
Route.post('/login', 'UserController.logIn')

//create a book in Library 
Route.post('/createBook', 'BookController.createBook')
// Route.post('/findBook' , 'BookController.findBook')
Route.post('/updateBook/:id', 'BookController.updateBook')
Route.post('/deleteBook/:id', 'BookController.deleteBook')

Route.group(() => {
  Route.get('/titles', 'GetbookController.getTitle')
  Route.get('titles/:id', 'GetbookController.getSingleTitle')

  Route.get('/authors', 'GetbookController.getAuthors')
  Route.get('author/:id', 'GetbookController.getSingleAuthor')

  Route.get('/categories', 'GetbookController.getCategories')
  Route.get('categories/:id', 'GetbookController.getSingleCategory')
}).prefix('books')
