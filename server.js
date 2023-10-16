const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // Import the 'cors' middleware

const port = process.env.PORT || 3000;

app.use(express.json());
// use your addres for mongoDB i used a Atlas + mongoDB :D
const mongoURI = '...............';
const Params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(mongoURI, Params)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('MongoDB Atlas connection error:', error);
    });

app.use(cors());

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
