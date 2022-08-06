const { SEED } = require("../config/config");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ message: "No hay token en la peticion" });
  }

  try {
    token = token.replace("Bearer ", "");
    const user = jwt.verify(token, SEED);
    req.user = user;

    next();
  } catch (error) {
    return res.status(400).json({ message: "Token no válido" });
  }
};

module.exports = {
  verifyToken,
};
