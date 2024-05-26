const express=require('express');
const {registerUser, login, logout, forgetpassword, resetpassword, myprofile, changepassword,getAllUsers,editUserRole} = require('../controllers/authController');
const { isauthenticateuser } = require('../middleware/authenticate');
const router=express.Router();
//user routes
router.route('/register').post(registerUser);
router.route('/login').post (login);
router.route('/logout').post(logout);
router.route('/password/forgot').post(forgetpassword);
router.route('/password/reset/:token').post(resetpassword);
router.route('/myprofile').get(isauthenticateuser,myprofile);
router.route('/changepassword').post(isauthenticateuser,changepassword);
router.route('/users').get(getAllUsers);
router.route('/edit-role').put(editUserRole);
module.exports=router