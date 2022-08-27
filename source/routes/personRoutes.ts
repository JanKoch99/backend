/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/personController';
const router = express.Router();

router.get('/person/:id', controller.getPerson);

export = router;