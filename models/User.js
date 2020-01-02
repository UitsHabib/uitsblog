const bcrypt = require("bcryptjs")
const validator = require("validator")



const db = require('../database/config')
global.db = db;



let User = function (data) {
  this.data = data
  this.errors = []
}


User.prototype.verify = function(){
  return new Promise((resolve,reject)=>{
    var sql = "SELECT *FROM programmer where UserName = '" + this.data.username + "' and code = '" + this.data.code + "'"
    db.query(sql, (err,result)=>{
      console.log(result.length)
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length > 0){
        console.log("step2")
        var sql = "UPDATE programmer SET IsActive = 1 where UserName = '" + this.data.username + "'"
        db.query(sql, (err,result)=>{
          if(err){
            console.log(err)
            reject(err)
          }
          else{
            resolve()
          }
        })
        
      }
    })
  })
}

/*
User.prototype.cleanUp = function () {
  if (typeof (this.data.username) != "string") { this.data.username = "" }
  if (typeof (this.data.password) != "string") { this.data.password = "" }

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    password: this.data.password
  }
}



User.prototype.savePasswordData = function () {
  return new Promise((resolve, reject) => {
    var oldpwd = this.data.OldPassword
    var newpwd = this.data.NewPassword
    var renewpwd = this.data.ReNewPassword

    if (newpwd != renewpwd) {
      this.errors.push({msg: "Password Not Matched"})
      reject()
      return
    }
    var sql = "UPDATE admin set Password = '" + newpwd + "' where AdminID = 1 && Password = '"+oldpwd+"' ";
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Please try again later"})
        reject(err)
      }
      else if(result.affectedRows>0) {
        console.log(result)
        this.errors.push({msg: "Successfully Updated Password"})
        resolve("Updated!")
      }
      else{
        this.errors.push({msg: "invalid old password"})
        reject()
      }
    })
  })
}
*/

User.prototype.login = function() {
  return new Promise((resolve, reject) => {
    //this.cleanUp()
    var sql = "SELECT  *FROM programmer WHERE (UserName = '" + this.data.email + "' or Email = '" + this.data.email + "') and Password = '" + this.data.password + "' and IsActive = 1"
    console.log(sql)
    db.query(sql, (err, result) => {
      if (err) {
        this.errors.push({msg: "Invalid"})
        reject(err)
      }
      if (result.length > 0) {
        resolve("Congrats!")
      }
      else {
        console.log("okk")
        this.errors.push({msg: "Invalid username / Password"})
        reject("Invalid username / password.")
      }
    })
  })
}

User.prototype.signUp = function () {

  let code = "4499"
  console.log(this.data)
  return new Promise((resolve, reject) => {
    var sql = "INSERT INTO programmer(UserName,Email,Password,Code) VALUES('" + this.data.username + "','" +  this.data.email + "','" + this.data.password + "','" + code + "')"
    db.query(sql, (err, result) => {
      if(err) {
        reject(err)
      }
      else{
        resolve("congrats")
      }
    })
  })
}

User.prototype.uniqueUserName = function(){
  return new Promise((resolve,reject)=>{
    var sql = "SELECT *FROM programmer where UserName = '" + this.data.username + "'"
    console.log(sql)
    db.query(sql, function(err,result){
      console.log(result)
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length == 0){
        console.log("good")
        resolve()
      }
      else {
        console.log("bad")
        reject("bad")
      }
    })
  })
}

User.prototype.uniqueEmail = function(){
  return new Promise((resolve,reject)=>{
    var sql = "SELECT *FROM programmer where Email = '" + this.data.email + "'"
    db.query(sql, function(err,result){
      if(err){
        console.log(err)
        reject()
      }
      else if(result.length == 0){
        resolve()
      }
      else {
        reject("bad")
      }
    })
  })
}

module.exports = User