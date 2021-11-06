import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Row, Col } from "react-flexbox-grid";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Row center="xs">
              <Col xs={6}>ULTIMATE FITNESS</Col>
            </Row>
          </Typography>
          <Button color="inherit"
          variant = "contained">
          <NavLink
              to="/signin"
              exact
            >
              SignIn
            </NavLink>
          </Button>
          <Button color="sucess"
          variant = "contained">
            <NavLink
              to="/signup"
              exact
            >
              SignUp
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarButton;
