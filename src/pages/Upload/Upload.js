import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { API } from "aws-amplify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "80vh",
    padding: "20px 50px",
  },
  heading: {
    color: theme.palette.primary.main,
    padding: "20px",
  },
  list: {
    textAlign: "center",
  },
}));

export default function Remediations() {
  const classes = useStyles();

  const nameRef = React.useRef(null);
  const templateRef = React.useRef(null);

  const upload = () => {
    console.log("uploading", nameRef.current.value, templateRef.current.value);
    API.post("SoardinatorAPI", "/upload", {
      body: {
        name: nameRef.current.value,
        template: templateRef.current.value,
      },
    });
  };

  return (
    <Grid className={classes.root} container spacing={10}>
      {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
      <Typography variant="h3" className={classes.heading}>
        Upload Template
      </Typography>
      <TextField
        label="name"
        inputRef={nameRef}
        placeholder="name"
        variant="filled"
      />
      <TextField
        label="paste YAML template"
        placeholder="paste YAML template"
        multiline
        rows={20}
        inputRef={templateRef}
        variant="filled"
      />
      <Button variant="contained" color="primary" onClick={upload}>
        Upload
      </Button>
    </Grid>
  );
}
