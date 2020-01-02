const User = require('../models/User')
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'habiburrahman3089@gmail.com',
    pass: 'habibur@nastik'
  }
});

exports.init = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.redirect('/login')
  }
}

exports.signuppage = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.render('signup')
  }
}

exports.signup = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    let user = new User(req.body)
    user.signUp().then(function(result){
      req.session.newuser = {username: user.data.username}
      var mailOptions = {
        from: 'habiburrahman3089@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        html: '<h1>Your Code: </h1><p><b>4499</b></p>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response)
          res.redirect('/check-validation')
        }
      });
    }).catch(function(e){
      console.log(e)
    })
  }
}

exports.checkValid = function(req,res){
  if(req.session.user){
    res.redirect('/')
  }
  else if(req.session.newuser){
    res.render('user_validation')
  }
  else{
    res.redirect('/')
  }
}

exports.checkVerify = function(req,res){
  if(req.session.user){
    res.redirect('/')
  }
  else if(req.session.newuser){
    var body = {
      username: req.session.newuser.username, 
      code: req.body.code
    }
    let user = new User(body)
    user.verify().then(function(result){
      req.session.user = {username: user.data.username}
      res.redirect('/home')
    }).catch(function(e){
      console.log(e)
    })
  }
  else{
    res.redirect('/')
  }
}

exports.loginPage = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    res.render('login')
  }
}

exports.login = function(req,res){
  if(req.session.user){
    res.redirect('/home')
  }
  else{
    let user = new User(req.body)
    user.login().then(function(result){
      req.session.user = {username: user.data.username}
      res.redirect('/home')
    }).catch(function(e){
      console.log(e)
    })
  }
}

exports.home = function(req,res){
  if(req.session.user){
    res.render('home')
  }
  else{
    res.redirect('/')
  }
}

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/')
  })
}


exports.isValidUserName = function(req,res){
  if(req.session.user){
    res.render('home')
  }
  else{
    let user = new User(req.body)
    user.uniqueUserName().then(function(result){
      res.send("ok")
    }).catch(function(e){
      res.send("bad")
      console.log(e)
    })
  }
}

exports.isValidEmail= function(req,res){
  if(req.session.user){
    res.render('home')
  }
  else{
    let user = new User(req.body)
    user.uniqueEmail().then(function(result){
      res.send("ok")
    }).catch(function(e){
      res.send("bad")
      console.log(e)
    })
  }
}