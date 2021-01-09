const connection = require("./model"),
    express = require("express"),
    ejs = require("ejs"),
    path =  require("path")
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",require("./routes/"))
app.listen(3000, () => {
    console.log("listening on port : 3000");
});
