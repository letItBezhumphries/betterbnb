const routes = require("express").Router();

routes
  .route(`pictures`)
  .get(controller.fetch)
  .post(controller.post);

module.exports = routes;
