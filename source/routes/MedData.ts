import express from 'express';
import controller from '../controllers/MedData.controller';
const router = express.Router();

//router.get('/posts', controller.getPosts); get ALl for history
router.get('/medData/:id', controller.getMedData);
router.put('/medData/:id', controller.updateMedData);
router.post('/medData', controller.createMedData);

export = router;