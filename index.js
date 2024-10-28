import express from "express"
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


app.get("/projects", (req, res) => {

    var date = new Date();
    var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var date_time = current_date + " " + current_time;


    const tech_stack = ["EJS", "postgres","node","React"];
    const tech_stack_len = tech_stack.length;

    const developer_stack = ["vishwjeet ujgare","shree","suhas"];
    const developer_stack_len = developer_stack.length;

    const card_data = {
        project_title: "portfolio website",
        desc: "project description quam purus justo enim purus, dolor enim,",
        tech_details: {
            techs: tech_stack,
            total_techs: tech_stack_len,
        },
        developed_by: {
            dev_names: developer_stack,
            total_devs: developer_stack_len
        },

        last_update: date_time
    }

    console.log(card_data.tech_details.total_techs);
    res.render("projects.ejs", {
        card_data
    });
});



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});