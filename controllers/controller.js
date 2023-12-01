const { FaceBook } = require("../models/facebook");

const getHomepage = (req, res) => {
  FaceBook.find()
    .then((result) => res.render("home", { result, err: null }))
    .catch((err) => res.render("home", { result: [], err: err.errors }));
};

const submitFeed = (req, res) => {
  const facebook = new FaceBook(req.body);
  facebook
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => res.render("/", { result: [], err: err.errors }));
};

const getFeed = (req, res) => {
  FaceBook.findById({ _id: req.params.id })
    .then((result) => res.render("viewFeed", { result }))
    .catch((err) => console.log(err));
};

const deleteFeed = (req, res) => {
  FaceBook.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  getHomepage,
  submitFeed,
  getFeed,
  deleteFeed,
};
