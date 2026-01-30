// require('dotenv').config({path:'./env'}) to import dotenv but we wont use it because this makes code inconsistent

import dotenv from "dotenv" //preferred

//use these if you want to use whole code in this index.js

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"
import connectDB from "./db/index.js";

//note: Connecting to db will have problems so to overcome it we use try catch or promises
    //database is always in another continent meaning it takes time so we should always use async await

    
//we used dotenv.config because only using import wont help for dotenv
dotenv.config({
    path:'./env'
})
//we import from db as this is the best approach 
  connectDB()






//The below multi line commented code is an alternative but less preferrable
/*import express from "express"
const app = express()

    

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERR:", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })
        }
        catch (error) {
            console.error("ERROR:", error)
            throw err
        }
    })()
        */