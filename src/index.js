require("dotenv").config();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 19003;

const app = require("./application");
const server = require("http").Server(app);

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

// if (ENV === "development" || ENV === "test") {
  Promise.all([
    read(path.resolve(__dirname, `db/schema/data.sql`)),
    read(path.resolve(__dirname, `db/seeds/data.sql`))
  ])
    .then(([create, seed]) => {
      app.get("/api/debug/reset", (request, response) => {
        db.query(create)
          .then(() => db.query(seed))
          .then(() => {
            console.log("Database Reset");
            response.status(200).send("Database Reset");
          });
      });
    })
    .catch(error => {
      console.log(`Error setting up the reset route: ${error}`);
    });
// }

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

