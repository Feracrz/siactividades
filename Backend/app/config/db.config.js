module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Deathnote1!",
  DB: "actividades",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
