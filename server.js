const express = require("express");

const app = express();
app.use(express.json());
app.use(middleware);

// Middleware function where we can perform checks before actual processing
function middleware(req, res, next) {
  console.log("Middleware code logic!");
  next(); // It'll pass on the control to the next step
}

// Connect routes to the server
require("./Routes/ideas-route")(app);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
