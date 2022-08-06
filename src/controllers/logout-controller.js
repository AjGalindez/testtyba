const tokenService = require("../services/token-service");

const logout = async (req, resp) => {
  const { body } = req;
  if (!body.token) {
    return resp.status(400).send({ message: "No hay un token en la petición" });
  }

  tokenService.updateToken(body.token);

  return resp.status(200).json({ message: "Token revocado" });
};

module.exports = {
  logout,
};
