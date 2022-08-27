/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/role.controller';
const router = express.Router();

router.get('/role/:id', controller.getRole);

export = router;