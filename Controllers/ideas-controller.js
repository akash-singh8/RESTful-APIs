const ideas = require("../Models/ideas-model");

// Search all idea
module.exports.fetchAllIdea = (req, res) => {
  res.status(200).send(ideas);
};

// Create new idea
// Request body is where we get data which's shared while making a POST request
module.exports.createIdea = (req, res) => {
  const idea = req.body;
  const currId = ideas.length;

  ideas.push({ id: currId + 1, ...idea });

  // Return the response, with status 201 -> means the response has been successfully created
  res.status(201).send(idea);
};

// Update idea

// Delete idea
