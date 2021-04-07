import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import {router} from './routes/authRoutes.js';
const PORT = process.env.PORT || 5000;

const app = express();

app.use('/v1',router);

async function start(){
    try {
        await mongoose.connect(config.get('mongoURI'),{useNewUrlParser: true, useUnifiedTopology: true})
    } catch (error) {
        console.log('Server Error!',error.messege);
        process.exit(1);
    }
}

app.listen(PORT, () => {console.log(`App has been succesfully launched at ${PORT}`)})
mongoUri:'mongodb+srv://sahak:<sahak99>@cluster0.ayvqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'