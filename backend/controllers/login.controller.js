const User = require("../models/User");
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY || 'itsAStrongPrivateKey';
const expTime = process.env.SESSION_EXPIRE_TIME || '40s';

module.exports.login =  async(req,res)=>
{
    const {email,password} = req.body;

    const founduser = await User.findOne({email:email,password:password})

    if (!founduser)
    {
        return res.status(403).json({status:403,message:'Invalid Credentials'});
    }
    else
    {
        const token = jwt.sign({email:email,name:founduser.name},privateKey,{expiresIn:expTime});
        return res.status(200).json({status:200, message:"User Logged in Successfully",token:token}); 
    }
}