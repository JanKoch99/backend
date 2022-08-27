/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/patientdata';
const router = express.Router();

router.get('/patientdata/:id', controller.getPatientData);

export = router;