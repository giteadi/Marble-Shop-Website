const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 });


exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        if (!firstName || !lastName || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the required fields"
            });
        }

        // Check if user with the same email exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            });
        }

        // Check if user exists in cache
        const cachedUser = cache.get(email);
        if (cachedUser) {
            const isPasswordValid = await bcrypt.compare(password, cachedUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({ userId: cachedUser._id }, process.env.JWT_SECRET);
                return res.status(200).json({
                    success: true,
                    message: "Login successful (from cache)",
                    token
                });
            }
        }

        // Check if user exists in database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Cache user data
        cache.set(email, user);

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

