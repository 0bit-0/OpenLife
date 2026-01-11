const createUserProvider= require("./providers/createuser.provider.js");

async function createUser(req, res) {
    return await createUserProvider(req, res);
}

module.exports = {
    createUser,
};