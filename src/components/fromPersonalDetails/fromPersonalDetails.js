import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { myStyles } from "./fromPersonalDetails.styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import "./test.css";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

const FromPersonalDetails = props => {
  const useStyles = makeStyles(myStyles);
  console.log(props);

  const handleSubmit = () => {
    props.history.push("/test");
  };

  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green
    },
    status: {
      danger: "orange"
    }
  });

  const GlobalCSS = withStyles({
    "@global": {
      "MuiButton-contained": {
        color: "red"
      }
    }
  })(() => null);

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Button variant='contained' color='primary'></Button>
          <Typography variant='primary'>typography</Typography>
          <h1 className={classes.test}>PersonalDetails</h1>
          <Button variant='contained' onClick={() => handleSubmit()}>
            handleSubmit
          </Button>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
};
export default withRouter(FromPersonalDetails);
