import morgan from "morgan";
const indexRoutes = require("./routes/index.routes.js");
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
// Configuracion de express para que use los handlebars

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

//decirle a express que use el motor de plantilla
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
