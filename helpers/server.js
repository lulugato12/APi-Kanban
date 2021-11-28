const { Sequelize } = require('sequelize');
const user = 'postgres';
const pass = 'B4k4.4B6579{|}';
const host = 'localhost';
const port = '5432';
const db = 'kanban_digital';

function conect_db(){
  const sequelize = new Sequelize(db, user, pass, {
  host: host,
  dialect: 'postgres'
  });

  return sequelize;
}

function close_db(sequelize){
  sequelize.close();
}

module.exports = {
  conect_db,
  close_db
}
