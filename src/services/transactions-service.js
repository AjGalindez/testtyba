const { pool } = require("../database/db-connection");

const getAllTransaction = async (userId) => {
  const queryValidate = `SELECT search, response FROM public.transactions where user_id = ${userId};`;
  const response = await pool
    .query(queryValidate)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      return "Error al conectar con la base de datos";
    });
  return response;
};

const saveTransaction = (userId, search, response) => {
  const queryInsert = `INSERT INTO public.transactions (user_id, search, response) VALUES(${userId}, '${search}', '${response}');`;
  pool.query(queryInsert, (error, results) => {
    if (error) {
      console.log(error);
    }

    return results;
  });
};

module.exports = {
  getAllTransaction,
  saveTransaction,
};
