const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => {
  res.redirect("/feed");
});

router.get("/feed", controller.getHomepage);

router.post("/submit-feed", controller.submitFeed);

router.get("/find/:id", controller.getFeed);

router.get("/delete/:id", controller.deleteFeed);

module.exports = router;
