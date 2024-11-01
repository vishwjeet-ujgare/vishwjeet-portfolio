import { getAllProjects, addProjectDetailsToDB } from "../models/projectModels.js";


// const fetchProjects = async (req, res) => {
//     try {
//         const allProjects = await getAllProjects();

//         // console.log(allProjects);

//         const totalProjects = allProjects.length;

//         const projectCards = [];



//         allProjects.forEach(project => {

//             const tech_stack =[];
//             const tech_stack_len=0;

//             if(project.techs!=null){
//                 tech_stack = project.techs;
//                  tech_stack_len = tech_stack.length;
//             }


//             const developer_stack = project.developers;
//             const developer_stack_len = developer_stack.length;

//             let start_date = new Date();

//             if (project.start_date == null) {
//                 start_date = ""; // Set to an empty string if start_date is null
//             } else {
//                 start_date = new Date(project.start_date).toLocaleDateString();
//             }

//             // console.log()
//             const card_data = {
//                 project_id: project.id,
//                 project_title: project.title,
//                 desc: project.description,
//                 tech_details: {
//                     techs: tech_stack,
//                     total_techs: tech_stack_len,
//                 },
//                 developed_by: {
//                     dev_names: developer_stack,
//                     total_devs: developer_stack_len
//                 },
//                 github_link: project.github_link,
//                 live_link: project.live_link,
//                 start_date: start_date,
//                 end_date: project.end_date,
//                 isActive: project.isactive,
//             }

//             projectCards.push(card_data);

//         });

//         const allProjectDetails = {
//             total_projects: totalProjects,
//             project_cards: projectCards
//         }



//         console.log(allProjectDetails.total_projects);

//         res.render("projects.ejs", { allProjectDetails });
//         // res.status(200).json({allProjectDetails});


//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching projects', error });
//     }
// };


const fetchProjects = async (req, res) => {
    try {
        const allProjects = await getAllProjects();
        const totalProjects = allProjects.length;
        const projectCards = [];

        allProjects.forEach(project => {
            let tech_stack = [];
            let tech_stack_len = 0;
            let developer_stack = [];
            let developer_stack_len = 0;
            let start_date = "";
            let end_date = "";
            let github_link = "";
            let live_link = "";
            let desc = "";
            let project_title = "";
            let project_id = "";
            let isActive = false;

            // Null checks and defaults
            if (project.techs != null) {
                tech_stack = project.techs;
                tech_stack_len = tech_stack.length;
            }

            if (project.developers != null) {
                developer_stack = project.developers;
                developer_stack_len = developer_stack.length;
            }

            if (project.start_date != null) {
                start_date = new Date(project.start_date).toLocaleDateString();
            }

            if (project.end_date != null) {
                end_date = new Date(project.end_date).toLocaleDateString();
            }

            if (project.github_link != null) {
                github_link = project.github_link;
            }

            if (project.live_link != null) {
                live_link = project.live_link;
            }

            if (project.description != null) {
                desc = project.description;
            }

            if (project.title != null) {
                project_title = project.title;
            }

            if (project.id != null) {
                project_id = project.id;
            }

            if (project.isactive != null) {
                isActive = project.isactive;
            }

            // Construct card_data with checked values
            const card_data = {
                project_id: project_id,
                project_title: project_title,
                desc: desc,
                tech_details: {
                    techs: tech_stack,
                    total_techs: tech_stack_len,
                },
                developed_by: {
                    dev_names: developer_stack,
                    total_devs: developer_stack_len
                },
                github_link: github_link,
                live_link: live_link,
                start_date: start_date,
                end_date: end_date,
                isActive: isActive,
            };

            projectCards.push(card_data);
        });

        const allProjectDetails = {
            total_projects: totalProjects,
            project_cards: projectCards
        };

        console.log(allProjectDetails.total_projects);
        res.render("manage-projects/project-cards.ejs", { allProjectDetails });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
};


const addNewProject = async (req, res) => {
    try {

      
        const addDataResponse = await addProjectDetailsToDB(req.body);
        console.log("hello")

        // console.log(addDataResponse);

        // res.render("manage-projects/manage-project.ejs", { addDataResponse });
        // res.redirect(302,'/manage-projects/');
        res.status(200).json({ message: "Project added successfully!",addDataResponse });

    } catch (error) {
        res.status(500).json({ message: 'Error occured while adding project details : ', error });
    }
};

export { fetchProjects, addNewProject };