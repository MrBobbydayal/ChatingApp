import express from 'express'
import { verifyJWT } from '../middleware/auth.middleware.js';
import { getUserforSidebar } from '../controllers/chatUser.controller.js';



const router=express.Router();

router.route('/').get(verifyJWT,getUserforSidebar);

export default router