const { SEED } = require("../config/config");
const jsonwebtoken = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const generateJwt = (user) => {
  return new Promise((resolve, reject) => {
    const { password, ...rest } = user;
    const payload = { user: rest, sessionID: uuid() };
    jsonwebtoken.sign(
      payload,
      SEED,
      {
        expiresIn: 14400,
      },
      (err, token) => {
        if (err) {
          reject("No se puedo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJwt,
};
