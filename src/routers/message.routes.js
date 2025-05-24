import express from 'express'
import  {sendMessage,
       getMessages,
}  from '../controllers/message.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';
const router=express.Router();

router.route('/send/:id').post(verifyJWT,upload.none(),sendMessage);
router.route('/:id').get(verifyJWT,getMessages);

export default router
