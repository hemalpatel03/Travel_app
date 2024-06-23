const User = require('../models/User'); // Ensure you have User model set up

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username });
        await User.register(user, password);
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.login = (req, res) => {
    res.send('User logged in');
};

exports.logout = (req, res) => {
    console.log('Logging out user:', req.user.username); // Verify user information
    req.logout();
    res.status(200).send('User logged out');
};
