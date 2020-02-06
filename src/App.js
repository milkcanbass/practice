import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";

//material Ui
import { GridList, GridListTile, GridListTileBar, IconButton, Container } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { Alert } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Component
import UserForm from "./components/userForm/userForm";
import Test from "./components/Test/test";

//material-ui
import { AppBar } from "@material-ui/core";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    let API_KEY = "13201160-f3df19895fe7da91ac0f2bd69";
    let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent("red roses");

    axios.get(URL).then(data => {
      this.setState({ images: data.data.hits });
    });
  }

  render() {
    let { images } = this.state;
    const { classes } = this.props;
    console.log(classes);

    return (
      <Fragment>
        <Container maxWidth='sm'>
          <Switch>
            <Route path='/' component={UserForm} />
            <Route path='/test' component={Test} />
            {/* <GridList cellHeight={160} cols={3}>
              {images
                ? images.map((image, idx) => (
                    <GridListTile key={idx} cols={image.cols || 1}>
                      <img src={image.userImageURL} alt={image.tags} />
                      <GridListTileBar
                        title={image.tags}
                        subtitle={<span>by: {image.tags}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${image.tags}`}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))
                : null}
            </GridList> */}
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 48,
    padding: "0 30px"
  }
});

export default withStyles(styles, { withTheme: true })(App);
