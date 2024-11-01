import express from 'express'
import { fetchProjects } from '../controllers/projectController.js'

const router = express.Router();


router.get('/', fetchProjects);




export default router;
