const { SEED } = require("../config/config");
const tokenService = require("../services/token-service");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ message: "No hay token en la peticion" });
  }

  try {
    token = token.replace("Bearer ", "");
    const user = jwt.verify(token, SEED);

    const response = await tokenService.validateToken(token);
    if (response.length > 0 && !response[0].is_valid) {
      return res.status(401).json({ message: "Token no válido" });
    }
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

module.exports = {
  verifyToken,
};
