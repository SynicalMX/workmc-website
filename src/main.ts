import express from "express";

const port = 80;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Webpage in development!");
});

app.listen(port, () => {
	console.log(`WorkMC website listening on port ${port}`)
});
