const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registrationUser = async(req, res, next)=>{
    try {
        const {name, email, password, mobile} = req.body;
        if(!name || !email || !password || !mobile) {
            return res.status(400).send("Please fill all the filedls");
        }
    
        const isUserExist = await User.findOne({email}) || await User.findOne({mobile});
        if(isUserExist) {
            return res.status(400).send('User already exist');
        }
    
        const hashPassword = await bcrypt.hash(password, 10);
    
        const newUSer = new User({
            name, email, password: hashPassword, mobile
        });
    
        await newUSer.save();
        res.status(201).send('User Registered successfully!!!')
    } catch(err){
        next(err);
    }
}

const loginUser = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send('Input all fileds');
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).send('User does not exist');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).send('Invalid email or password');
        }
        const jwtToken = jwt.sign({ userId: user._id}, "secreat",{expiresIn: '240h'})

        res.status(200).json({token:jwtToken,name:user.name,email:user.email,mobile:user.mobile, userId: user._id})
    }catch(err){
        next(err);
    }
}

const allUser = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        
        if(!email || !password) {
            return res.status(400).send('Please all the fileds.')
        }
        if(email=='admin@backend.com' || password=='admin') {
            const alluserData = await User.find();
            return res.status(200).json(alluserData);
        } else {
            return res.status(400).send('Invalid email and password.')
        }
    }catch(err) {
        next(err)
    }
}

module.exports = {registrationUser, loginUser, allUser}
