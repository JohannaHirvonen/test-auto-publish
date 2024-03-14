import express from "express";

const app = express();

app.use(express.static('www'));

app.listen(3333, () => console.log('Listening on http://localhost:3333'));