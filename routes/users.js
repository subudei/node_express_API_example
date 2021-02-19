import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  // {
  //   firstName: "Claudio",
  //   lastName: "Lopez",
  //   number: 7,
  // },
  // {
  //   firstName: "Pablo",
  //   lastName: "Aimar",
  //   number: 21,
  // },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body; // created usere in postman

  users.push({ ...user, id: uuidv4() }); // adding user with unique Id (spread operator)

  res.send(`User with the name ${user.firstName} added to the data base`);
}); // adding users

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database`);
});

export default router;

// paused at 44:00
