import { asyncHanlder } from "../utils/asyncHandler.js";
import { STATUS } from "../constants/status.constants.js";

const registerUser = asyncHanlder(async(req,res)=>{
    return res.status(STATUS.ACCEPTED).json({message:"Ok"})
})

export {registerUser}