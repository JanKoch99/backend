/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/person.controller';
const router = express.Router();

router.get('/person/login', controller.getPerson);
router.get('/person/regristration', controller.createPerson);

export = router;