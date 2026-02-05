const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
<<<<<<< HEAD
const cors = require("cors");

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// IMPORTANT : gérer explicitement OPTIONS
app.options("*", cors());

const tasksRoutes = require("./routes/tasksRoutes");
app.use("/api/tasks", tasksRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
=======
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

const tasksRoutes = require("./routes/tasksRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use("/api/tasks", tasksRoutes);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((err, req, res, next) => {
    res.status(422).send({ error: err._message });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

>>>>>>> ae2816857feaedb3999cb0372392191bb2848833
