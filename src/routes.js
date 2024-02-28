const {Router} = require("express");

const routes = new Router();

routes.get('/', (request, response) => {
    return response.json({message:"Euricão da bahia"});
});

module.exports = routes