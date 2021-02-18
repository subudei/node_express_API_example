import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    firstName: "Pablo",
    lastName: "Aimar",
    age: 21,
  },
];

router.get("/", (req, res) => {
  console.log(users);

  res.send(users);
});

// router.post("/", (req,  res)=> {

// })
// install postmen  - puzirano na 23:11
export default router;
