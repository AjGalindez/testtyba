const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const jwt = require("../helpers/jwt");
const bcrypt = require("bcryptjs");

const login = async (req, resp) => {
  const { body } = req;
  if (!body.email || !body.password) {
    return resp
      .status(400)
      .send({ message: "Email y/o contraseña incorrectas" });
  }
  const userDB = await userService.validateUserexists(body.email);

  if (typeof userDB === "string") {
    return resp.status(400).send({ message: userDB });
  }

  const user = userDB[0];
  if (!bcrypt.compareSync(body.password, user.password)) {
    return resp
      .status(401)
      .json({ message: "Email y/o contraseña incorrectas" });
  }

  const token = await jwt.generateJwt(user);
  tokenService.saveToken(token, user.id);

  return resp.status(200).json({ token });
};

module.exports = {
  login,
};
