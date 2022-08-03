const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 7000;

app.use(express.json());

const logger = (tokens, req, res) => {
    console.log("======================");
    console.log(tokens);
    console.log("======================");

    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.date(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(" ");
}

app.use(morgan(logger));


app.get("/", (req, res) => {
    res.send("its home page");
})
app.listen(PORT, () => {
    // console.log("server started on port : " + PORT);
})