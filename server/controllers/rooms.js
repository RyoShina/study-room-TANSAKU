const express = require("express"),
  router = express.Router(),
  models = {
    rooms: require("../models/rooms.js"),
  }

const moment = require("moment-timezone");

router.get("", async function(req, res) {
  try {
    const query = {
      isDelete: false
    };
    const option = {
      skip: 0,
      limit: 10
    }
    const result = await models.rooms.find(query, option);
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json(null);
  }
});

module.exports = router;
