/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

//router.get('/posts', controller.getPosts); get ALl for history
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.post('/posts', controller.addPost);

export = router;