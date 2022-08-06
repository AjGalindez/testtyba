const { pool } = require("../database/db-connection");

const validateUserexists = async (email) => {
  const queryValidate = `select * from users u where email = '${email}';`;
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

const createUser = async (newUser) => {
  const queryInsert = `INSERT INTO public.users(first_name, last_name, email, password) VALUES('${newUser.firstName}', '${newUser.lastName}', '${newUser.email}', '${newUser.password}');`;
  const response = await pool
    .query(queryInsert)
    .then((result) => {
      return result.rowCount > 0
        ? { status: 200, message: "Usuario creado correctamente" }
        : { status: 400, message: "Error al crear el usuario" };
    })
    .catch((error) => {
      return { status: 400, message: "Error al crear el usuario" };
    });
  return response;
};

module.exports = {
  createUser,
  validateUserexists,
};
