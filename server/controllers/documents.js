const express = require("express"),
  settings = require("../config").default;
  getterUtil = require("../utils/getterUtil"),  
  router = express.Router(),
  AWS = require("aws-sdk"),
  fs = require("fs")

AWS.config.update({
  accessKeyId: settings.AWS_ACCESS_KEY,
  secretAccessKey: settings.AWS_SECRET_ACCESS_KEY,
  region: settings.AWS_REGION
})

router.get("", async function(req, res) {
  try {
    const docKey = getterUtil.getString(req, "docKey", {})

    const s3 = new AWS.S3({region: settings.AWS_REGION})
    const s3Params = {
      Bucket: settings.AWS_BUCKET,
      Key: docKey
    };
    s3.headObject(s3Params, function(err, data) {
      if(err){
        console.error(err)
        return res.status(404).json(null);
      }      
      const stream = s3.getObject(s3Params).createReadStream()
      stream.on("error", function error(err){
        console.error(err)
        return res.status(500).json(null);
      })

      res.attachment(docKey)
      stream.pipe(res)
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json(null);
  }
});

module.exports = router;
