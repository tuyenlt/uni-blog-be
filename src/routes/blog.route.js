const router = require('express').Router();
const blogController = require('../controllers/blog.controller')

router.get('/blog', blogController.getAllPosts);

module.exports = router;