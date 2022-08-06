const Pool = require("pg").Pool;
const pool = new Pool({
  user: "uvhi5zzxqthg1lojbctw",
  host: "bvj7vrhluhlw8panbbbu-postgresql.services.clever-cloud.com",
  database: "bvj7vrhluhlw8panbbbu",
  password: "45qjrQovgNEZktCrYwN5",
  port: 5432,
  max: 20,
});

module.exports = {
  pool,
};
