const db = require("../models");
// Import Db object
const User = db.user;
const Tag = db.tag;
const Sequelize = require("sequelize");

// For Create User
exports.createuser = async (req, res) => {
  try {
    let result = await User.create({ user_name: req.body.user_name });
    res
      .status(200)
      .send({ message: "User created Successfully", result: result });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// For Get All Tags
exports.gettag = async (req, res) => {
  try {
    let result = await Tag.findAll({
      attributes: ["tag_name"],
    });
    res
      .status(200)
      .send({ message: "Successfully Fetched Tags", data: result });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// Filter Tag on Base of Keyword
exports.filtertag = async (req, res) => {
  try {
    if (req.query.search) {
      let result = await Tag.findAll({
        where: { tag_name: { [Sequelize.Op.like]: `%${req.query.search}%` } },
        order: [["tag_name", "asc"]],
        attributes: ["tag_name"],
      });
      res.status(200).send({
        message: `Successfully Fetched by filter Keyword ${req.params.sarch}`,
        data: result,
      });
    } else {
      let result = await Tag.findAll({
        order: [["tag_name", "asc"]],
        attributes: ["tag_name"],
      });
      res.status(200).send({
        message: `Successfully Fetched by filter Keyword ${req.params.sarch}`,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// Users Can Get all tag created by them
exports.mytag = async (req, res) => {
  try {
    let result = await Tag.findAll({
      where: { user_id: req.params.id },
    });
    res.status(200).send({
      message: `Sucessfully Fetched Tags created by user ${req.params.id}`,
      data: result,
    });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// User can create tag
exports.createtag = async (req, res) => {
  try {
    let result = await Tag.create({
      user_id: req.body.id,
      tag_name: req.body.tag,
    });
    res
      .status(200)
      .send({ message: "Succesfully Tag Created", result: result });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// User can Delete Tag Created By them
exports.deletetag = async (req, res) => {
  try {
    let result = await Tag.destroy({
      where: { user_id: req.params.id, tag_id: req.params.tagId },
    });
    res
      .status(200)
      .send({ message: `Successfully No of Deleted Tags ${result}` });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};

// Use Can update tags created by him
exports.updatetag = async (req, res) => {
  try {
    let result = await Tag.update(
      { tag_name: req.body.tagName },
      { where: { user_id: req.body.id, tag_id: req.body.tagId } }
    );
    res.status(200).send({ message: `No of Updated Tag ${result}` });
  } catch (error) {
    res.status(400).send({ message: "Error Occoured", error: error.message });
  }
};
