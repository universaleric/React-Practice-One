const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();

//import routes
/*---import routes here---*/

//app
const app = express();

//db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

//middlewares
app.use(cors());
app.use(bodyParser.json());

//route middleware

//port
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
