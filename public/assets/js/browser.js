document.getElementById("username").addEventListener("input", validUsername)
document.getElementById("email").addEventListener("input", validEmail)
//document.getElementById("signup").addEventListener("click", signUp)

function validUsername() {
  let userInput = document.getElementById('username').value
  if(userInput) {
    axios.post('/unique-username', {username: userInput}).then(function(result) {
        if(result.data=="ok"){
            document.getElementById('msg').innerHTML = ""
        }
        if(result.data=="bad"){
            document.getElementById('msg').innerHTML = "User Name is already in use"
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
  }
  else{
      document.getElementById('msg').innerHTML = ""
  }
}


function validEmail() {
  let userInput = document.getElementById('email').value
  if(userInput) {
    axios.post('/unique-email', {email: userInput}).then(function(result) {
        if(result.data=="ok"){
            document.getElementById('msg').innerHTML = ""
        }
        if(result.data=="bad"){
            document.getElementById('msg').innerHTML = "Email is already in use"
        }
    }).catch(function() {
      console.log("Please try again later.")
    })
  }
  else{
      document.getElementById('msg').innerHTML = ""
  }
}
/*
function signUp() {
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let password2 = document.getElementById('password2').value

    if(username) {
      axios.post('/unique-username', {username: username}).then(function(result) {
          if(result.data=="bad"){
              document.getElementById('msg').innerHTML = "UserName is not Unique. Try with another one"
              return
          }
      }).catch(function() {
        console.log("Please try again later.")
      })
    }
    else{
        document.getElementById('msg').innerHTML = ""
    }
    
    if(email) {
        axios.post('/unique-email', {email: email}).then(function(result) {
            if(result.data=="bad"){
                document.getElementById('msg').innerHTML = "Email is not Unique. Try with another one"
                return
            }
        }).catch(function() {
          console.log("Please try again later.")
        })
      }
    else{
        document.getElementById('msg').innerHTML = ""
    }

    
    axios.post('/sign-up', {username: username, email: email, password: password, password2: password2}).then(function(result) {
        
    }).catch(function() {
      console.log("Please try again later.")
    })
  }
  */