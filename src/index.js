const express = require("express");
const usersRoutes = require("./routes/user-route");
const loginRoutes = require("./routes/login-route");
const logoutRoutes = require("./routes/logout-route");
const searchRoutes = require("./routes/search-route");
const TransactionRoutes = require("./routes/transaction-route");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/transactions", TransactionRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
