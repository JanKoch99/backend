/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/RoleController';
const router = express.Router();

router.get('/role/:id', controller.getRole);

export = router;