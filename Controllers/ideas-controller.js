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
module.exports.updateIdea = (req, res) => {
  // Read the id passed in the path
  const ideaId = parseInt(req.params.id);
  const toUpdate = req.body;

  // Checking if the idea is present
  if (ideas.length >= ideaId) {
    Object.keys(toUpdate).forEach((key) => {
      ideas[ideaId - 1][key] = toUpdate[key];
    });

    res.status(200).send(ideas[ideaId - 1]);
  } else {
    res.status(400).send({ invalid: "Idea Not Found!" });
  }
};

// Delete idea
module.exports.deleteIdea = (req, res) => {
  const ideaId = parseInt(req.params.id);

  if (ideas.length >= ideaId) {
    ideas.splice(ideaId - 1, 1);
    res.status(200).send({ message: "Successfully Deleted" });
  } else {
    res.status(400).send({ invalid: "Idea Not Found!" });
  }
};
