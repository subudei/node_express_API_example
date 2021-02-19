import express from "express";
import bodyParser from "body-parser"; //in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body

import usersRoutes from "./routes/users.js"; //

const app = express(); // actualy the App !!!!!
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send(`Hello from Homepage.`));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
