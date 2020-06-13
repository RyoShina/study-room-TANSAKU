const express = require("express"),
  getterUtil = require("../utils/getterUtil"),  
  router = express.Router(),
  models = {
    rooms: require("../models/rooms"),
  },
  moment = require("moment-timezone");

  router.get("", async function(req, res) {
  try {
    const option = getterUtil.getObjectFromJsonString(req, "option", {})
    const condition = getterUtil.getObjectFromJsonString(req, "condition", {})
    condition.isDelete = false

    let result = await models.rooms.find(condition, option);
    const documentTotal = await models.rooms.countDocuments(condition)
    return res.json({
      result,
      documentTotal
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json(null);
  }
});

router.get("/:roomId", async function(req, res) {
  try {
    const roomId = getterUtil.getString(req, "roomId", {})

    let result = await models.rooms.findById(roomId)
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json(null);
  }
});

module.exports = router;
