import express from 'express';
const router = express.Router();
import {isAuthentictedUser} from '../middlewares/authh.js'
import { newOrder } from '../controllers/orderControllers.js';

router.route('/orders/new').post(isAuthentictedUser,newOrder);

export default router