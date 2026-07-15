const {
  app
} = require("./app.js");

// designate which PORT the server will listen on
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}.`);
});