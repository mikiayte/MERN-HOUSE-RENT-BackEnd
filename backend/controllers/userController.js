
import asyncHandler from "express-async-handler"
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js'

// @access public
const authUser = async (req,res) => {
      const {email, password} = req.body;

      const user = await User.findOne({email})
      if(user && (await user.matchPassword(password)))
      {
         generateToken(res, user._id )
         res.status(201).json({_id:user._id, name:user.name, email:user.email})     
      }
      else{
         res.status(401).json({message:'Invalid email or password'});
                
      }

}
const registerUser =  async (req, res) => {
    const {name, email, password} = req.body
        const userExists = await User.findOne({ email });
      

            if(userExists)
            {
                res.status(400).json({message:'User Already exists'});
                
                  
           }
          else {
           const userCreate = await User.create({ email, name, password });
           if(userCreate)
           {
              generateToken(res, userCreate._id )
              res.status(201).json({_id:userCreate._id, name:userCreate.name, email:userCreate.email})     
           }
           else{
              res.status(400)
              throw new Error('Invalid User data')
           }
          
              }
           }
         


//@access private
const logoutUser = asyncHandler((req,res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires : new Date (0),
    })
    res.status(200).json({message:'User Logged out'})
    
})
const getUserProfile = asyncHandler((req,res) => {
    res.status(200).json({message:'User Profile'})

})
const updateUserProfile = asyncHandler(async (req,res) => {

    const user = await User.findById(req.user._id);
    
    if(user) 
    {
          user.name = req.body.name || user.name
          user.email = req.body.email || user.email 

          if(req.body.password)
          {
            user.password = req.body.password;
          }
            const updatedUser = await user.save();

          if(updatedUser)
          {
            res.status(200).json({id:updatedUser._id,
             email:updatedUser.email,
             name:updatedUser.name   
            })
          }

      
          
          
          
    }


})


export {
    authUser, registerUser, logoutUser, getUserProfile, updateUserProfile
}
