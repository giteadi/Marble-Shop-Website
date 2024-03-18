const dbConnection = require('./config/dbConnection');
const Routs=require("./routes/shopRoutes");
const cors = require('cors');

const express = require("express");
require("dotenv").config();

const app = express();

// middlewares

app.use(express.json());
app.use(cors());
dbConnection(); 

// mounting
app.use("/api/v1",Routs);

app.get('/', (req, res) => {
   res.send(`<h1>This is Homepage</h1>`);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
