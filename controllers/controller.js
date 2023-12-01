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
    .then(() => res.redirect("/"))
    .catch((err) => res.render("/", { result: [], err: err.errors }));
};

const getFeed = (req, res) => {
  FaceBook.findById({ _id: req.params.id })
    .then((result) => res.render("viewFeed", { result }))
    .catch((err) => console.log(err));
};

const editFeed = (req, res) => {
  FaceBook.findById({ _id: req.params.id })
    .then((result) => res.render("editFeed", { result }))
    .catch((err) => console.log(err));
};

const deleteFeed = (req, res) => {
  FaceBook.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

const updateFeed = (req, res) => {
  console.log("update called", req.params.id);
  FaceBook.findByIdAndUpdate({ _id: req.params.id })
    .then((result) => {
      result.name = req.body.name;
      result.message = req.body.message;
      result
        .save()
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getHomepage,
  submitFeed,
  getFeed,
  deleteFeed,
  editFeed,
  updateFeed,
};
