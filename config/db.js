const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/travel-app');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log(`Failed to connect to MongoDB: ${err.message}`);
});
