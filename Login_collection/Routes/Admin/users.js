function userRoute(adminApp) {
    let {UserController} = require("../../Controllers/userController.js");
    let user_controller = new UserController();
    adminApp.get("/users", user_controller.getAllUsers);
    adminApp.get("/users/:id", user_controller.getUserById);
    adminApp.post("/users", user_controller.addUser);
    adminApp.post("/login", user_controller.login);
    adminApp.put("/forgetPassword", user_controller.forgetPassword);
    adminApp.delete("/users/:id", user_controller.deleteUserById);
    adminApp.put("/users/:id", user_controller.updateUserById);
    adminApp.put("/status/users/:id", user_controller.changeUserStatusById);
}
module.exports = {
    userRoute
}