const express = require('express');
const{ signup, signin } = require('../controller/auth');
const{ validateSignupRequest, isRequestValidated, validateSigninRequest} = require('../validators/auth')
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);

router.post('/signin',validateSigninRequest, isRequestValidated, signin);

//router.post('/profile', require, (req,res) => {
  //  res.status(200).json({ user: 'User Profile'})
//});

module.exports = router;