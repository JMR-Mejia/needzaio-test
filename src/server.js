const express = require("express");

const getUser = require("./data/User");
const { port } = require('./config')

// config 
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  // get request input and validate
  const data = req.body;
  if (data.username === undefined || data.password === undefined) {
    return res.status(400).json({
      message: "data is missing or incorrect"
    })
  }

  // Validate info user with database
  return getUser(data.username).then(function (resp) {
    const user = resp.data.USER_by_pk;

    if (req.body.password === user.PASSWORD) {
      return res.json({
        access: true
      });
    }
    return res.status(400).json({
      access: false,
    });
  });
});

app.listen(port);
