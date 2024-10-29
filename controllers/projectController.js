import { getAllProjects } from "../models/projectModels.js";


// app.get("/projects", (req, res) => {

//     var date = new Date();
//     var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//     var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//     var date_time = current_date + " " + current_time;


//     const tech_stack = ["EJS", "postgres","node","React"];
//     const tech_stack_len = tech_stack.length;

//     const developer_stack = ["vishwjeet ujgare","shree","suhas"];
//     const developer_stack_len = developer_stack.length;

//     const card_data = {
//         project_title: "portfolio website",
//         desc: "project description quam purus justo enim purus, dolor enim,",
//         tech_details: {
//             techs: tech_stack,
//             total_techs: tech_stack_len,
//         },
//         developed_by: {
//             dev_names: developer_stack,
//             total_devs: developer_stack_len
//         },

//         last_update: date_time
//     }

//     console.log(card_data.tech_details.total_techs);
//     res.render("projects.ejs", {
//         card_data
//     });
// });

const fetchProjects = async (req, res) => {
    try {
        const allProjects = await getAllProjects();


        const totalProjects = allProjects.length;

        const projectCards = [];



        allProjects.forEach(project => {

            const tech_stack = project.techs;
            const tech_stack_len = tech_stack.length;

            const developer_stack = project.developers;
            const developer_stack_len = developer_stack.length;

            const start_date = project.start_date.toLocaleDateString();
            // console.log()
            const card_data = {
                project_id: project.id,
                project_title: project.title,
                desc: project.description,
                tech_details: {
                    techs: tech_stack,
                    total_techs: tech_stack_len,
                },
                developed_by: {
                    dev_names: developer_stack,
                    total_devs: developer_stack_len
                },
                github_link: project.github_link,
                live_link: project.live_link,
                start_date: start_date,
                end_date: project.end_date,
                isActive: project.isactive,
            }

            projectCards.push(card_data);

        });

        const allProjectDetails = {
            total_projects: totalProjects,
            project_cards: projectCards
        }



        console.log(allProjectDetails.total_projects);

        res.render("projects.ejs", { allProjectDetails });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
};

export { fetchProjects };