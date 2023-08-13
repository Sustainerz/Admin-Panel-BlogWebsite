
// import process from 'node:process';
const process = require('node:process');
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");



// Handing Uncaught Exception


process.on('uncaughtException', function (err) {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down the Server due to Handing Uncaught Exception");
    server.close(()=>{
                process.exit(1);
              })
  })


// //Config

dotenv.config({path:"config/config.env"});

// // Connecting to database

 connectDatabase();





const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost${process.env.PORT}`);
}); 


// // Unhandled Promise Rejection


process.on('uncaughtException', function (err) {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down the Server due to Unhandled Promise Rejection");
    server.close(()=>{
                process.exit(1);
             })
  })