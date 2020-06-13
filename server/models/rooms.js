const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const roomsSchema = mongoose.Schema(
  {
    name: String,
    word: String,
    tags: { type: [SchemaTypes.String] },
    type: String,
    imgSrc: String,   
    created: Date,
    modified: Date,
    isDelete: Boolean
  },
  {
    collection: "rooms"
  }
);
const rooms = mongoose.model("rooms", roomsSchema);

exports.find = async function(condition, option) {  
  return await rooms.find(condition, null, option);
};

exports.findById = async function(id) {  
  return await rooms.findById(id)
};

exports.countDocuments = async function(condition) {
  return await rooms.countDocuments(condition);
};

exports.create = async function(room) {
  return await new rooms(room).save();
};

exports.update = async function(room) {
  return await room.save();
};

exports.aggregate = async function(condition) {
  return await rooms.aggregate(condition);
};
