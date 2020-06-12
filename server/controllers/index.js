var express = require("express"),
  router = express.Router();

router.use("/api/v1/documents/", require("./documents"));
router.use("/api/v1/rooms/", require("./rooms"));

module.exports = router;
