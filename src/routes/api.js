import express from 'express';
import {login, Registration} from "../controller/UserController.js";
import {AllProfileRead, profileDelete, profileUpdate, singleProfileRead} from "../controller/ProfileController.js";
import {AuthMiddleware} from "../middleware/AuthMiddleware.js";
const router = express.Router();


// User Api
router.post('/Registration',Registration)
router.get('/login/:email',login)

// Profile Api
router.get('/singleProfileRead',AuthMiddleware,singleProfileRead)
router.get('/AllProfileRead',AuthMiddleware,AllProfileRead)
router.get('/profileUpdate',AuthMiddleware,profileUpdate)
router.get('/profileDelete',AuthMiddleware,profileDelete)



















export default router;