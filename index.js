var express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

require("dotenv").config();
const port = process.env.PORT || 4000;


const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://Dog:123456a@cluster0.z7j2c.gcp.mongodb.net/instag?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

  
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(express.static("files"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));

//Router
const routerUserApi = require("./routes/auth.route");
const routerPostApi = require("./routes/post.route");

app.get("/", (req, res) => res.send("Hello, I'am Dog! This is API for app instagram use React"));

app.use("/", routerUserApi);

app.use("/post", routerPostApi);

app.listen(port, () => console.log(`Server listening on port ${port}`));