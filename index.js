import express from "express";
import bodyParser from 'body-parser';
// import { fetchProjects, addProject } from "./controllers/projectController.js";
import projectRoutes from "./routes/projectRoutes.js"
import manageProjectRoutes from "./routes/manageProjectRoutes.js"
// import {dirname} from "path"
// import { fileURLToPath } from "url" 

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // Add this line to parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
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


app.get("/manage-jeet-portfolio", (req, res) => {
    res.render("manage-jeet-portfolio/portfolio-dashboard.ejs");
});


// Publicly accessible project routes
app.use("/projects", projectRoutes);

// Restricted management routes
app.use("/manage-projects", manageProjectRoutes);



// app.use("/manage-projects", project);


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});