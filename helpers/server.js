const { Sequelize } = require('sequelize');
const user = 'root';
const pass = '';
const host = 'localhost';
const port = '80';
const db = 'test';

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
