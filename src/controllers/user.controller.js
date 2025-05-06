const UserModel = require('../models/user.model');

const userController = {
    login: (req, res) => {
        const { email, password } = req.body;
        const user = UserModel.verify(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json(user);
    }
}

module.exports = userController;