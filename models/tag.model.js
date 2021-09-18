module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define("tag", {
    tag_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.UUID,
    },
    tag_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Tag;
};
