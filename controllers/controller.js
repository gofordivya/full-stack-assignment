const { FaceBook } = require("../models/facebook");

const getHomepage = (req, res) => {
  FaceBook.find()
    .sort({ createdAt: -1 })
    .then((result) => res.render("home", { result, err: null }))
    .catch((err) => res.render("home", { result: [], err: err.errors }));
};

const submitFeed = (req, res) => {
  const facebook = new FaceBook(req.body);
  facebook
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => res.render("home", { result: [], err: err.errors }));
};

const getFeed = (req, res) => {
  FaceBook.findById({ _id: req.params.id })
    .then((result) => res.render("viewFeed", { result }))
    .catch((err) => console.log(err));
};

const editFeed = (req, res) => {
  FaceBook.findById({ _id: req.params.id })
    .then((result) => res.render("editFeed", { result, err: null }))
    .catch((err) => console.log(err));
};

const deleteFeed = (req, res) => {
  FaceBook.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

const updateFeed = (req, res) => {
  FaceBook.findByIdAndUpdate({ _id: req.params.id })
    .then((result) => {
      result.name = req.body.name;
      result.message = req.body.message;
      result
        .save()
        .then(() => res.redirect("/"))
        .catch((err) =>
          res.render("editFeed", { result: [], err: err.errors })
        );
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
