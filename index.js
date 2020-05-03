const express = require("express");

const app = express();

app.get("/", function(req, res) {
	res.send("hello");
});

app.listen(3000, () => {
	console.log("App is running on port 3000!");
});
