import express from "express";
import {addNewProject} from  '../controllers/projectController.js';
const router = express.Router();



router.get('/', (req, res) => {
    res.render('manage-projects/manage-project.ejs');
})

router.post('/new', addNewProject);

export default router;