const dbConnection = require('./config/sqlDB');
const routes = require("./routes/shopRoutes");
const cors = require('cors');

const express = require("express");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
(async () => {
    const pool = await dbConnection();
    app.set('pool', pool);
})();

// mounting
app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.send(`<h1>This is Homepage</h1>`);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
