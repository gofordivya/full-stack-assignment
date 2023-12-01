const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/feed", controller.getHomepage);

router.post("/submit-feed", controller.submitFeed);

router.get("/feed/:id", controller.getFeed);

router.get("/feed/delete/:id", controller.deleteFeed);

router.get("/feed/edit/:id", controller.editFeed);

router.post("/feed/update/:id", controller.updateFeed);

router.get("/", (req, res) => {
  res.redirect("/feed");
});

module.exports = router;
