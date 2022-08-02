const express = require('express');
const fs = require('fs');
const checkMovieFormat = require("./functions");

const PORT = 7000;

const app = express();
app.use(express.json());

const checkFormat = (req, res, next) => {
    if (checkMovieFormat(req.body)) {
        next();
    } else {
        res.status(400).send();
    }
}

app.use(checkFormat);

app.post("/movies", (req, res) => {
    let item = req.body;
    let dbData = JSON.parse(fs.readFileSync("./movieDB.json", { encoding: "utf-8" }));

    dbData.movies.push(item);

    let updatedData = JSON.stringify(dbData);

    fs.writeFileSync("./movieDB.json", updatedData, { encoding: "utf-8" });
    res.send("posted succesfully");
});

app.get("/", (req, res) => {
    let movies = fs.readFileSync("./movieDB.json", { encoding: "utf-8" })
    res.send(movies);
})

app.listen(PORT, () => {
    console.log("listening on port : " + PORT);
})