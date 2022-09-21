import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    width: "100px",
    marginTop: "30px",
  },
}));

export const Welcome = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Welcome to naukri.com job portal</Typography>
      </Grid>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/login")}
        className={classes.submitButton}
      >
        Login
      </Button> */}
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};
