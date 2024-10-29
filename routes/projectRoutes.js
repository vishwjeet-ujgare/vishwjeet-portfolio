import express from 'express'
import { fetchProjects } from '../controllers/projectController.js'

const router = express.Router();

router.get('/project', fetchProjects);

export default router;
