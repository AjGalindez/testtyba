const { response } = require("express");
const searchService = require("../services/search-service");
const transactionService = require("../services/transactions-service");

const search = async (req, resp) => {
  const { headers } = req;
  const userID = req.user.user.id;
  const coordenadas = headers.coordenadas;

  if (!coordenadas) {
    return resp
      .status(400)
      .json({ message: "Debe enviar parametros para la busqueda" });
  }

  const split = coordenadas.split(",");
  const lat = split[0];
  const long = split[1];
  let responseLatLong = await searchService.searchWithLatLong(lat, long);

  transactionService.saveTransaction(
    userID,
    coordenadas,
    JSON.stringify(responseLatLong).replace(/[']+/g, "")
  );
  return resp.status(200).json({ data: responseLatLong });
};

module.exports = {
  search,
};

// Token lat c0f97e0495838baf1db8ecf3bd3bfa04
