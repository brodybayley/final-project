import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import mapImage from "../assets/map-home.png";

import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1578409760928-91924170cb81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
    height: "450px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },

  container: {
    padding: "75px 0 75px",
  },

  itemContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "1280px",
    position: "relative",
    justifyContent: "space-around",
    margin: "75px 0 0",
  },

  mapContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "rgb(22, 28, 36)",
    margin: "45px 0 0",
    padding: "120px 0px",
  },

  itemTitle: {
    fontFamily: "Be Vietnam",
    fontWeight: "700",
  },

  item: {
    display: "flex",
    position: "relative",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "rgb(232 232 232 / 48%)",
    paddingTop: "80px",
    maxWidth: "300px",
    minHeight: "300px",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignSelf: "start",
    boxShadow: "4px 1px 13px -2px rgba(0,0,0,0.12)",
  },

  svg: {
    position: "relative",
    width: "20%",
    height: "100%",
    margin: "20px auto",
    color: "#20232a",
  },

  mapSub: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "0.75rem",
    lineHeight: "4.5",
    letterSpacing: "1.2px",
    color: "rgb(145, 158, 171)",
  },

  mapTitle: {
    marginBottom: "45px",
    fontSize: "2.75rem",
    fontWeight: "700",
  },

  mapText: {
    color: "white",
    alignSelf: "center",
    textAlign: "start",
    width: "100%",
    maxWidth: "250px",
  },

  mapImage: {
    position: "relative",
    width: "65%",
  },

  heroContents: {
    width: "100%",
    maxWidth: "750px",
  },

  search: {
    backgroundColor: "white",
    borderRadius: "5px",
  },

  grid: {
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    gap: "12px 12px",
    margin: "75px 0 0",
  },

  gridCard: {
    height: "100px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  paragraphs: {
    padding: "10px",
  },

  sanFran: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')`,
    backgroundSize: "cover"
  },

  vancouver: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1522108700534-0e3c5dfa233b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  losAngeles: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1434&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  newYork: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1576439564014-f4b336956d59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80')`,
    backgroundSize: "cover"
  },

  toronto: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  seattle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/map");
  };
  return (
    <div className="Home">
      <Box className={classes.hero}>
        <Container className={classes.heroContents}>
          <h1>GlassWalls</h1>
          <h4 className="home-moto">Helping Each Other Find Home</h4>
          <TextField
            id="standard-full-width"
            className={classes.search}
            label="Search"
            fullWidth
            autoComplete="off"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon onClick={handleClick} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>
      <Container className={classes.container}>
        <Typography className={classes.itemTitle} variant="h4">
          Popular North American Cities
        </Typography>
        <Grid className={classes.grid} container>
          <Grid
            onClick={handleClick}
            className={`${classes.gridCard} ${classes.sanFran}`}
            item
          >
            <p>San Francisco</p>
          </Grid>
          <Grid className={`${classes.gridCard} ${classes.vancouver}`} item>
            <p>Vancouver</p>
          </Grid>
          <Grid className={`${classes.gridCard} ${classes.losAngeles}`} item>
            <p>Los Angeles</p>
          </Grid>
          <Grid className={`${classes.gridCard} ${classes.newYork}`} item>
            <p>New York</p>
          </Grid>
          <Grid className={`${classes.gridCard} ${classes.toronto}`} item>
            <p>Toronto</p>
          </Grid>
          <Grid className={`${classes.gridCard} ${classes.seattle}`} item>
            <p>Seattle</p>
          </Grid>
        </Grid>
        <Grid>
          <Typography className={classes.itemTitle} variant="h4">
            How GlassWalls works for you
          </Typography>
        </Grid>
        <Grid className={classes.itemContainer} container spacing={3}>
          <Grid className={classes.item} item xs>
            <RateReviewOutlinedIcon className={classes.svg} />
            <Typography variant="h5">Reviews</Typography>
            <Typography className={classes.paragraphs}>
              View 1000's of building reviews left by current or past residents.
            </Typography>
            <Typography className={classes.paragraphs}>
              Have you reviewed your building yet? Add it today!
            </Typography>
          </Grid>
          <Grid className={classes.item} item xs>
            <ApartmentOutlinedIcon className={classes.svg} />
            <Typography variant="h5">Properties</Typography>
            <Typography className={classes.paragraphs}>
              Find out what people are saying about buildings from around the
              corner to around the globe.
            </Typography>
            <Typography className={classes.paragraphs}>
              Start your search today!
            </Typography>
          </Grid>
          <Grid className={classes.item} item xs>
            <ExploreOutlinedIcon className={classes.svg} />
            <Typography variant="h5">Areas</Typography>
            <Typography className={classes.paragraphs}>
              New in town or curious about neighborhood ratings?
            </Typography>
            <Typography className={classes.paragraphs}>
              Let our heatmap fueled by user ratings lead you to your ideal
              area!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid className={classes.mapContainer} container spacing={2}>
        <Grid item xs={8}>
          <img
            className={classes.mapImage}
            src={mapImage}
            alt={classes.mapImage}
          />
        </Grid>
        <Grid className={classes.mapText} item xs={4} m>
          <Typography variant="h4" className={classes.mapTitle}>
            Interactive Map
          </Typography>
          <Typography>
            The map is designed to make your property search a breeze with
            color-coded areas based on user ratings and filters to find your
            home without the headache!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
