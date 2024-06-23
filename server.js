const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel-app');

// Middleware
app.use(express.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/travel-app' })
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serve static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});
app.get('/travel-app/tourly/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tourly', 'index.html'));
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
