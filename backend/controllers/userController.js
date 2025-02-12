import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // Corrected spelling from 'bycryt' to 'bcrypt'
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config(); // Ensure dotenv is configured to load environment variables

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password); // Corrected spelling from 'bycryt' to 'bcrypt'

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" }); // Corrected spelling from 'Invaild' to 'Invalid'
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // check user exist
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }

        // validate email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10); // Corrected spelling from 'bycryt' to 'bcrypt'
        const hashPassword = await bcrypt.hash(password, salt); // Corrected spelling from 'bycryt' to 'bcrypt'

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser };