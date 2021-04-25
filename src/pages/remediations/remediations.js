import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Remediation } from "../../components/Remediation";
import { Typography } from "@material-ui/core";
import { API } from "aws-amplify";

function ApiTester(props) {
  const path = React.useRef(null);
  const body = React.useRef(null);
  const post = (e) => {
    e.preventDefault();
    API.post("SoardinatorAPI", path.current.value, {
      body: JSON.parse(body.current.value),
    });
  };
  const get = (e) => {
    e.preventDefault();
    API.get("SoardinatorAPI", path.current.value);
  };
  return (
    <React.Fragment>
      <input ref={path} type="text" placeholder="path" />
      <input ref={body} type="text" placeholder="body" />
      <input type="submit" onClick={post} value="post" />
      <input type="submit" onClick={get} value="get" />
    </React.Fragment>
  );
}

const defaultRemediations = [
  {
    id: "enable-auto-vpc-flowlogging",
    status: "inactive",
  },
  {
    id: "enable-default-serverside-s3-bucket-encryption",
    status: "inactive",
  },
  {
    id: "EC2",
    status: "inactive",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 50px",
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
  const [remediations, updateRemediations] = React.useState(
    defaultRemediations,
    []
  );

  React.useEffect(() => {
    API.get("SoardinatorAPI", "/remediations").then((r) =>
      updateRemediations(r)
    );
  }, []);

  const updateList = (id) => {
    console.log("updating", id);
    updateRemediations(
      remediations.map((r) => (r.id === id ? { ...r, active: !r.active } : r))
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6} className={classes.list}>
          <Typography variant="h3" className={classes.heading}>
            Active
          </Typography>
          {remediations
            .filter(
              (r) => r.status !== "inactive" && r.status !== "DELETE_COMPLETE"
            )
            .map((r) => (
              <Remediation
                {...r}
                text={r.id + " - " + r.status}
                updateList={updateList}
              />
            ))}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.list}>
          <Typography variant="h3" className={classes.heading}>
            Available
          </Typography>
          {remediations
            .filter(
              (r) => r.status === "inactive" || r.status === "DELETE_COMPLETE"
            )
            .map((r) => (
              <Remediation {...r} text={r.id} updateList={updateList} />
            ))}
        </Grid>
      </Grid>
      <ApiTester />
    </div>
  );
}
