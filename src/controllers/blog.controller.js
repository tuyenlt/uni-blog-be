const Blog = require('../models/blog.model');

const blogController = {
    getAllPosts: (req, res) => {
        res.status(200).json(Blog.data);
    },
    getPostById: (req, res) => {
        const postId = parseInt(req.params.id, 10);
        const post = Blog.data.find((p) => p.id === postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    },
    createPost: (req, res) => {
        try {
            const newPost = {
                id: Blog.data.length + 1,
                ...req.body,
            };

            Blog.add(newPost);
            Blog.save();
            res.status(200).json(newPost);
        } catch (err) {
            console.error('Failed to create post:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = blogController;