'use strict'
const User = use('App/Models/User')
const Mail = use('Mail')
const randomString  = require('random-string')
const Hash = use('Hash')



class UserController {
    async register({ request , response }){
      
        try {
            const { first_name, last_name , username, email , password, is_admin } = request.post()

            const user = await User.create({
                first_name, 
                last_name ,
                username ,
                email,
                password, 
                is_admin ,
                confirmation_token:randomString({length:40})
            })

               //send confirmation Email 
            await Mail.send('auth.emails.confirm-email', user.toJSON(), message =>{
                message.to(user.email)
                .from('hello@adonisjs.com')
                .subject('Please confirm your email address ') 
            })
        // display success message 

            response.status(200).json({
                message:'User created',
                data:user
            })            

        } catch (error) {
            response.status(400).json({
                message:"There was an error creating the user ",
                error
            })
            
        }
    }
    async confirmEmail({params:{token}, response}){
        try {
              //get user with the confirmation token
          const user =  await User.findBy('confirmation_token ', (token) )

          //set confirmation to null and is_actie to true 
  
  
        
            user.confirmation_token = null         
            user.is_active = true
      
     
          //persist user to database 
  
          user.save()
          //display success message
          
          response.status(200).json({
              message:'Your Email has ben confirmed , LogIn'
          }) 
        } catch (error) {
            response.status(400).json({
                message: "User account not found"
            })
        }

    }
    async logIn({request, auth , response}){
        try {
            const {email, password }  = request.all()
        
            const verify = await User.findBy('email',email)
            // console.log('verify : ', verify);
            
            if(verify){
                const data = await auth.attempt(email,password)                           
              
                return response.status(200).json({
                    message:'Successful! , User has been logged in ',
                    data
                })
            }
            response.json({
                message:'User details not correct'
            })                
            
        } catch (error) {
            console.log(error);
            
            message:'There was a problem logging in , Check details and try again'
            error             
        }
        
    }
}


module.exports = UserController
