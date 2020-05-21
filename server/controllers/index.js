var express = require("express"),
  router = express.Router();

router.use("/api/v1/rooms/", require("./rooms"));

module.exports = router;
