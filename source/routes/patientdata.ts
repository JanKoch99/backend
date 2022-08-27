/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/patientdata.controller';
const router = express.Router();

router.get('/patientdata/:id', controller.getPatientData);

export = router;