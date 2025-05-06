const router = require('express').Router();
const blogRoutes = require('./blog.route');
const userRoutes = require('./user.route');

router.use(blogRoutes);
router.use(userRoutes);

module.exports = router