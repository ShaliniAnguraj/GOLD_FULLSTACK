import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

//login
//route POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(401);
        throw new Error("Invalid email or passwod");
      }
});

//register
//route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, profile, address } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists ");
  }

  const user = await User.create({
    name,
    email,
    password,
    profile,
    //mobile,
    address,
  });

  if (user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile : user.profile || " ",
      //mobile: user.mobile,
      address: user.address,

    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//logout
//route POST /api/users/logout
const logoutUser = (req, res) => {
    res.cookie("jwt", "",{
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: " User logged out successfully" });

};
//get user profile
// route GET/api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
   
   if(user) {
    res.json({
      _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        profile: req.user.profile,
       // mobile: req.user.mobile,
         address: req.user.address,
      })
        
    }else{
      res.status(404);
      throw new Error("User not found")
    }
});


// route PUT /api/users/profile

const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.profile = req.body.profile || user.profile;
       // user.mobile = req.body.mobile || user.mobile;
        user.address = req.body.address || user.address;




        if(req.body.password){
            user.password = req.body.password;
        }
       const updatedUser = await user.save();

       res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email : updatedUser.email,
        profile: updatedUser.profile,
        //mobile: updatedUser.mobile,
        address: updatedUser.address,
    })
    }else{
        res.status(404);
        throw new Error("User not found")
    }
  res.status(200).json({ message: " Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
