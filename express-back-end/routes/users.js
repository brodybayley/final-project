const router = require("express").Router();

// const login = (email, password) => {
//   db.query(
//     `
//     SELECT * FROM users
//     WHERE email = $1
//     `,
//     [email]
//   )
//     .then((res) => res.rows[0])
//     .then((user) => {
//       if (user.password === password) {
//         return user;
//       }
//       return null;
//     });
// };
// exports.login = login;

module.exports = (db) => {
  //   // access log in page
  //   router.get("/login", (req, res) => {
  //     const templateVars = { user: null };
  //     res.render("login", templateVars);
  //   });

  //   // logs in a user
  //   router.post("/login", (req, res) => {
  //     const { email, password } = req.body;
  //     login(email, password)
  //       .then((user) => {
  //         if (!user) {
  //           res.send(
  //             "Wrong login. Please check your email or password and try again."
  //           );
  //         }
  //         req.session.userId = user.id;
  //         res.redirect("/");
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   });

  // Gets a user profile
  router.get("/users/:id", (req, res) => {
    // const userID = req.params.id;
    const userID = 1;
    db.query(
      `
      SELECT *
      FROM users
      WHERE id = $1
      `,
      [userID]
    )
      .then(({ rows: user }) => res.json(user))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Access users favourites
  router.get("/users/:id/favourites", (req, res) => {
    // const userID = req.params.id;
    const userID = 1;

    db.query(
      `
      SELECT * FROM favourites
      JOIN buildings ON building_id = buildings.id
      WHERE user_id = $1
      `,
      [userID]
    )
      .then(({ rows: favourites }) => res.json(favourites))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Favourite a building
  router.post("/users/:id/favourites", (req, res) => {
    const userID = req.params.id;
    const buildingID = req.body.id;

    db.query(
      `
      INSERT into favourites (user_id, building_id) VALUES ($1, $2)
      RETURNING *
      `,
      [userID, buildingID]
    )
      .then((favourite) => res.json(favourite))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //Delete a favourite
  router.delete("/users/:id/favourites/:id", (req, res) => {
    const favouriteID = req.params.id;
    db.query(
      `
      DELETE FROM favourites
      WHERE id = $1
      `,
      [favouriteID]
    )
      .then(() => res.send("Deleted from favourites"))
      .catch((err) => {
        res.status(204).json({ error: err.message });
      });
  });
  return router;
};
