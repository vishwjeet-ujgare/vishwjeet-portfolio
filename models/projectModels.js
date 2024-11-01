import {query} from "../config/db.js";

const getAllProjects = async () => {
    const selectQuery = 'SELECT * FROM projects';
    const result = await query(selectQuery);
    // console.log(result);
    return result.rows;
};


const addProjectDetailsToDB = async (project) => {
    // Destructure the project object 
    const { 
        title, 
        startDate, 
        endDate, 
        techStack,  
        devStack, 
        description, 
        gitHubLink, 
        liveProjectLink 
    } = project;

    // Build the PostgreSQL array for devStack and techStack
    const devStackArray = Array.isArray(devStack) && devStack.length > 0 
        ? `ARRAY[${devStack.map(item => `'${item}'`).join(', ')}]::text[]` 
        : `NULL`; 

    const techStackArray = Array.isArray(techStack) && techStack.length > 0 
        ? `ARRAY[${techStack.map(item => `'${item}'`).join(', ')}]::text[]` 
        : `NULL`;

    // Handle empty date fields ,we dont want to store empty string, we want to store null values
    const start_date = startDate ? `'${startDate}'` : `NULL`;
    const end_date = endDate ? `'${endDate}'` : `NULL`;


    const projectDescription = description || `NULL`;
    const projectGitHubLink = gitHubLink || `NULL`; 
    const projectLiveLink = liveProjectLink || `NULL`; 

    // Construct the SQL query to insert project details into the database
    const addProjectQuery = `
    INSERT INTO projects (title, start_date, end_date, techs, developers, description, github_link, live_link) 
    VALUES (
        '${title}', 
        ${start_date}, 
        ${end_date}, 
        ${techStackArray}, 
        ${devStackArray}, 
        ${projectDescription}, 
        ${projectGitHubLink}, 
        ${projectLiveLink}
    ) 
    RETURNING *`; 

    // console.log(addProjectQuery); // for debugging


    const result = await query(addProjectQuery); 
    
    return result;
};


export {getAllProjects,addProjectDetailsToDB };
