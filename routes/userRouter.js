const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
//const dataController = require('../controllers/dataController')

// user basic information
/*
router.get('/login', userController.loginpage)
router.post('/login', userController.login)
router.get('/home', userController.home)
router.get('/logout', userController.logout)
router.get('/about', userController.about)
router.get('/contact-us', userController.contact)
router.post('/update-password', userController.updatePassword)
*/



router.get('/', userController.init)
router.get('/sign-up', userController.signuppage)
router.post('/sign-up', userController.signup)
router.get('/check-validation', userController.checkValid)
router.post('/check-validation', userController.checkVerify)
router.get('/login', userController.loginPage)
router.post('/login', userController.login)
router.get('/home', userController.home)
router.get('/log-out', userController.logout)

router.post('/unique-username', userController.isValidUserName)
router.post('/unique-email', userController.isValidEmail)
module.exports = router
