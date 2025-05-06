const Users = require('./user-data.json');

const fs = require('fs');

const UserModel = {
    data: Users,
    verify: (email, password) => {
        const user = UserModel.data.find((user) => user.email === email && user.password === password);
        return user;
    },
    add: (newUser) => {
        UserModel.data.push(newUser);
    },
    save: () => {
        try {
            fs.writeFileSync('./src/models/user-data.json', JSON.stringify(UserModel.data, null, 2));
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    },
}

module.exports = UserModel;