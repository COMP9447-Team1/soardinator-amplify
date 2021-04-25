import React from "react";
import { Typography, IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { API } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#3f51b5",
    width: "95%",
  },
}));

function RemoveButton({ id, updateList }) {
  const clickHandle = () => {
    API.post("SoardinatorAPI", "/delete", {
      body: { id },
    })
      .catch((e) => console.log(e))
      .then(() => updateList(id));
  };

  return (
    <IconButton color="primary" onClick={clickHandle}>
      <RemoveIcon />
    </IconButton>
  );
}

function AddButton({ id, updateList }) {
  const clickHandle = () => {
    API.post("SoardinatorAPI", "/add", {
      body: { id },
    })
      .catch((e) => console.log(e))
      .then(() => updateList(id));
    updateList(id);
  };

  return (
    <IconButton color="primary" onClick={clickHandle}>
      <AddIcon />
    </IconButton>
  );
}

export default function Remediation({ id, text, status, updateList }) {
  const classes = useStyles();
  console.log("status", status);
  console.log(status !== "DELETE_COMPLETE");
  return (
    <Box
      display="flex"
      justify-content="flex-start"
      alignItems="center"
      flexDirection="row"
      flexWrap="nowrap"
    >
      <Typography className={classes.text}>{text}</Typography>
      {status !== "inactive" && status !== "DELETE_COMPLETE" ? (
        <RemoveButton {...{ id, updateList }} />
      ) : (
        <AddButton {...{ id, updateList }} />
      )}
    </Box>
  );
}
