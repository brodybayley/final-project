require("dotenv").config();

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// brody practice
// const Path = require("path");
const session = require("express-session");

const db = require("./db");
const buildings = require("./routes/buildings");
const users = require("./routes/users");
const login = require("./routes/login");
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.use("/api", buildings(db));
App.use("/api", users(db));

// brody practice
App.use(
  session({
    key: "asdas8hehbsdfskhvjsafdvdfv",
    secret: "msaduhdsfsf8uerbjasfasdf",
    // store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1825 * 86400 * 1000,
      httpOnly: false,
    },
  })
);

new login(App, db);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
