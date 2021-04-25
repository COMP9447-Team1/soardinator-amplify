import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: 15,
    fontSize: "2em",
  },
  menu: {
    width: 250,
    color: theme.palette.primary.main,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [menuOpen, setMenu] = useState(false);

  const history = useHistory();

  const navigate = (index) => {
    const routes = ["remediations", "upload"];
    history.push(routes[index]);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SOARDINATOR 3000
          </Typography>
          <AmplifySignOut>Logout</AmplifySignOut>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={menuOpen} onClose={() => setMenu(false)}>
        <div
          className={classes.menu}
          role="presentation"
          onClick={() => setMenu(false)}
          onKeyDown={() => setMenu(false)}
        >
          <List>
            {["Remediations", "Upload Template"].map((text, index) => (
              <ListItem button key={text} onClick={() => navigate(index)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
