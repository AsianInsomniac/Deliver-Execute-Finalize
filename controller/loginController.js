const bcrypt = require('bcryptjs');
const User = require('../models/user')

exports.register = function (req,res) {
  const { username, pass, email, mobile} = req.body;
  

  User.findOne({ email: email })
      .then(user => {
          if(user){
              
              res.redirect('userExists')

          }
          else{
              const newUser = new User({

                  username: username,
                  password: pass,
                  emailadd: email,
                  number: mobile,
                     
              });
              
              // console.log(newUser)
              
              bcrypt.genSalt(10, (err,salt) => 
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if(err) throw err;
                      //set password to hash
                      newUser.password=hash;
                      //save user
                      newUser.save()
                      .then(user => {
                          res.redirect('/login');
                      })
                      .catch(err => console.log(err));

                  })) 
                  
          }
      });
  
}


exports.login = function (req,res) {
  
      const { username, password} = req.body;
      //  console.log(req.body)
      //  console.log(username);
      //  console.log(password);
     
      if(username == "admin" && password == "abcd1234"){
          
          res.redirect("/mainMenu/lib")
      }
      else{
          res.redirect("/mainMenu/libLogin")
      }
      
      
  
  
}

module.exports = loginController;