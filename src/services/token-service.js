const { pool } = require("../database/db-connection");

const saveToken = (token, userId) => {
  pool.query(
    `INSERT INTO public.tokens(token, is_valid, user_id)VALUES('${token}', true, ${userId});`,
    (error, results) => {
      if (error) {
        console.log(error);
      }

      return results;
    }
  );
};

const updateToken = (token) => {
  pool.query(
    `UPDATE public.tokens SET is_valid=false WHERE token='${token}';`,
    (error, results) => {
      if (error) {
        console.log(error);
      }

      return results;
    }
  );
};

const validateToken = async (token) => {
  const response = await pool
    .query(`SELECT is_valid FROM public.tokens WHERE token='${token}';`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      return "Error al conectar con la base de datos";
    });
  return response;
};

module.exports = {
  saveToken,
  updateToken,
  validateToken,
};
