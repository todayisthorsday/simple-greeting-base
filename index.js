const express = require("express");
const path = require("path");
const { getRandomGreeting } = require("./utils/greetingGenerator");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (request, response) => {
  const generatedGreeting = getRandomGreeting();
  response.render("index", { greeting: generatedGreeting });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
