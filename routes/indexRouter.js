const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hi everybody, it's doctor Nick",
    user: "Doctor Nick",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.get("/mssg/:index", (req, res) => {
  const index = req.params.index;
  if (!messages[index]) {
    return res.status(404).send("Message not found");
  }
  res.render("messagePage", { messages: messages, index: index });
});

indexRouter.post("/new", (req, res) => {
  const text = req.body.Text;
  const user = req.body.name;
  messages.push({text: text, user: user, added: new Date()});
  res.redirect("/");
});

module.exports = indexRouter;