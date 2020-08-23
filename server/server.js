const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
// Port is a dynamic environment variable defined by Heroku.
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
// Make yarn build executed before this. Otherwise the necessary assets
// would not be loaded.
app.listen(port, () => {
    console.log("The Express Server is up.");
});