const {UserController} = require("../../Controllers/userController");
let user_controller = new UserController();


function userRoutes(userApp) {
    userApp.post("/login", user_controller.login);
    userApp.get("/users", user_controller.getAllUsers);
    userApp.get("/users/:id", user_controller.getUserById);
    userApp.post("/users", user_controller.addUser);
}

module.exports = {
    userRoutes
}