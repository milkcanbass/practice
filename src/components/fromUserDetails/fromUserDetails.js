import React, { Component, Fragment } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <Grid container spacing={4} direction='column' justify='center' alignItems='center'>
          <Grid item xs={4}>
            <TextField
              hintText='enter your first name'
              floatingLabelText='FirstName'
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              hintText='enter your Last name'
              floatingLabelText='lastName'
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              hintText='enter yoemail'
              floatingLabelText='email'
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </Grid>
          <br />

          <Button
            variant='contained'
            style={styles.button}
            color='primary'
            onClick={this.continue}
            Disable
            elevation></Button>
        </Grid>
      </Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 150
  }
};

export default FormUserDetails;
