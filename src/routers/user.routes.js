import { Router } from "express";
import { registerUser,
         loginUser,
        logoutUser ,
     refreshAccessToken,
    getCurrentUser,
changeCurrentPassword,
updateAccountDetails,
updateUserAvatar,
getUserChannelProfile,
} from '../controllers/user.controllers.js'
import { upload } from '../middleware/multer.middleware.js'
import { verifyJWT } from '../middleware/auth.middleware.js'


const router=Router()

router.route("/register").post(upload.none(),registerUser)



router.route("/login").post(upload.none(),loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refreshToken").post(refreshAccessToken)
router.route("/changePassword").post(upload.none(),verifyJWT, changeCurrentPassword)
router.route("/currentUser").get(verifyJWT, getCurrentUser)
router.route("/updateAccount").patch(upload.none(),verifyJWT, updateAccountDetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/userProfile").get(upload.none(),verifyJWT, getUserChannelProfile)


export default router
