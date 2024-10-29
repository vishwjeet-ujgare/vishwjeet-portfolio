import {query} from "../config/db.js";

const getAllProjects = async () => {
    const selectQuery = 'SELECT * FROM projects';
    const result = await query(selectQuery);
    return result.rows;
};

export {getAllProjects };
