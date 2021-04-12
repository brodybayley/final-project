const router = require("express").Router();

module.exports = (db) => {
  //   Read => GET => ‘/api/users’					Gets all users
  // Gets a user
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
