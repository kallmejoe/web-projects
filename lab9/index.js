const express = require('express');
const mongoose = require('mongoose');
const courseRouter = require('./router.course'); // Import the router

const app = express();
const PORT = 4000;

app.use(express.json());


const uri = "mongodb+srv://Shbab:Al_mot2alaqeen123@cluster0.kosgftr.mongodb.net/elackdb?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
        console.log('Successful Connection to MongoDB');
    })
    .catch((error) => {
        console.log('Connection Failed:', error);
    });

app.use('/api/courses', courseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
