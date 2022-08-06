const transactionsService = require("../services/transactions-service");

const bcrypt = require("bcryptjs");

const getAllTransactions = async (req, resp) => {
  const userID = req.user.user.id;
  const response = await transactionsService.getAllTransaction(userID);
  return resp.status(200).send({ response: response });
};

module.exports = {
  getAllTransactions,
};
