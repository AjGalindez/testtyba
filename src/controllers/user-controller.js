const userService = require("../services/user-service");

const bcrypt = require("bcryptjs");

const createUser = async (req, resp) => {
  const { body } = req;

  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    return resp
      .status(400)
      .send({ message: "La información no esta completa" });
  }
  const responseValidate = await userService.validateUserexists(body.email);

  if (typeof responseValidate === "string") {
    return resp.status(400).send({ message: responseValidate });
  }

  if (responseValidate.length > 0) {
    return resp
      .status(400)
      .send({ message: "El usuario ya se encuentra registrado" });
  }
  const salt = bcrypt.genSaltSync();
  body.password = bcrypt.hashSync(body.password, salt);
  const responseCreate = await userService.createUser(body);

  return resp
    .status(responseCreate.status)
    .send({ message: responseCreate.message });
};

module.exports = {
  createUser,
};
