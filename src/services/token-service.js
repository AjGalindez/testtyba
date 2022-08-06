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

module.exports = {
  saveToken,
  updateToken,
};
