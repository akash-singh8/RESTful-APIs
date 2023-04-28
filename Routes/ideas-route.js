const ideaController = require("../Controllers/ideas-controller");

module.exports = (app) => {
  // Listening for get request
  app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdea);

  // Listening for post request
  app.post("/ideaApp/v1/ideas", ideaController.createIdea);
};
