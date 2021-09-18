const db = require("../models");

const User = db.user;
const Tag = db.tag;
const Sequelize = require("sequelize");

exports.createuser = async (req, res) => {
  try {
    let result = await User.create({ user_name: req.body.user_name });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.gettag = async (req, res) => {
  try {
    let result = await Tag.findAll({
      order: [["tag_name", "asc"]],
      attributes: ["tag_name"],
    });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.filtertag = async (req, res) => {
  try {
    let result = await Tag.findAll({
      where: { tag_name: { [Sequelize.Op.like]: `%${req.query.search}%` } },
      order: [["tag_name", "asc"]],
      attributes: ["tag_name"],
    });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.mytag = async (req, res) => {
  try {
    let result = await Tag.findAll({
      where: { user_id: req.query.id },
    });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.createtag = async (req, res) => {
  try {
    let result = await Tag.create({
      user_id: req.body.id,
      tag_name: req.body.tag,
    });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.deletetag = async (req, res) => {
  try {
    let result = await Tag.destroy({
      where: { user_id: req.query.id, tag_id: req.query.tagId },
    });
    res.send(`${result}`);
  } catch (error) {
    res.send(error.message);
  }
};

exports.updatetag = async (req, res) => {
  try {
    let result = await Tag.update(
      { tag_name: req.body.tagName },
      { where: { user_id: req.body.id, tag_id: req.body.tagId } }
    );
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
