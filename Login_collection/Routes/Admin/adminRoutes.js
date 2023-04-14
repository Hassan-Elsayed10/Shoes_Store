const {userRoute} = require("./users");

function adminRoutes(adminApp) {
    userRoute(adminApp);
}

module.exports = {
    adminRoutes
}