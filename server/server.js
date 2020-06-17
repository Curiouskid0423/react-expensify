const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
// Make yarn build is executed before this. Otherwise the necessary assets
// would not be loaded.
app.listen(3000, () => {
    console.log("The Express Server is up.");
});