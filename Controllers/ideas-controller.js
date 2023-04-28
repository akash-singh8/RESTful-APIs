const ideas = require("../Models/ideas-model");

// Search all idea
module.exports.fetchAllIdea = (req, res) => {
  res.status(200).send(ideas);
};

// Create new idea

// Update idea

// Delete idea
