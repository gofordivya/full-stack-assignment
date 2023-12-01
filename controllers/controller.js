const { FaceBook } = require("../models/facebook");

const getHomepage = (req, res) => {
  FaceBook.find()
    .then((result) => res.render("home", { result, err: null }))
    .catch((err) => res.render("home", { result: [], err: err.errors }));
};

const submitFeed = (req, res) => {
  const facebook = new FaceBook(req.body);
  console.log("body: ", req.body);
  facebook
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => res.render("/", { result: [], err: err.errors }));
};

module.exports = {
  getHomepage,
  submitFeed,
};
