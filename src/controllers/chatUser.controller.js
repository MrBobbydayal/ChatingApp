import User from "../models/usder.models.js";

const getUserforSidebar=async(req,res)=>{
try {
    const loggedinUserId=req.user._id;
    const filteredUserId= await User.find({_id:{$ne:loggedinUserId}}).select("-password");
    res.status(200).json(filteredUserId);
} catch (error) {
    console.log("Error at getUserforSidebar controller",error.message)
        res.status(500).json({error:"internal server error"});
}

};

export {getUserforSidebar}



