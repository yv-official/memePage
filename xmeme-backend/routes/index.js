const express = require('express');

const router = express.Router();

//controllers
const controllers = require('../controllers')

router.get('/', (req, res) => {res.send('<h1>Hi</h1>')})
router.get('/memes', controllers.getMemes);
router.get('/memes/:id', controllers.getMemeById);
router.post('/memes', controllers.postMeme);
router.patch('/memes/:id', controllers.patchUpdate);
router.patch('/memes/:id/comment',controllers.patchComments);
router.patch('/memes/:id/like', controllers.patchLikes);
router.patch('/memes/:id/dislike', controllers.patchDislikes)

module.exports= router;