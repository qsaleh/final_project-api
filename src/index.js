const PORT = process.env.PORT || 19003;

const app = require("./application");
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
