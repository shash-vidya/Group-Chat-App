const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupchatdb', 'root', 'Shashvraj21!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
