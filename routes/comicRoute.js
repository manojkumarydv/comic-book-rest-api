import express from 'express';

import {
    createComic,
    getComics,
    getComicById,
    updateComic,
    deleteComic
} from '../controllers/comicController.js';



const router = express.Router();


router.route('/')
    .post(createComic)
    .get(getComics);

router.route('/:id')
    .get(getComicById)
    .put(updateComic)
    .delete(deleteComic);

export default router;
