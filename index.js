import express from "express";
import  {fetchProjects} from "./controllers/projectController.js";
// import {dirname} from "path"
// import { fileURLToPath } from "url" 

// app.use(bodyParser.urlencoded({ extended: true }));



const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { message: "Hello" });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});


app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.use("/projects",fetchProjects);


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});