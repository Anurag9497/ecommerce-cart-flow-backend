import mongoose from 'mongoose';
import 'dotenv/config';


mongoose.connect(
    process.env.GHUMO_MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, link) => {
        if(err)
            console.log("Database Connection Failed...");
        else
            console.log("Database Connection Success...");
    }
);
