import express from 'express';
import {getPosts,createPost} from '../controllers/postControllers.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('./:id', updatePost);

export default router;