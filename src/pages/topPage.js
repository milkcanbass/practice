import React, { Fragment } from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./topPage.css";
import { Typography, createMuiTheme, ThemeProvider } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px"
//   }
// });
const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h1",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
        color: "red"
      }
    }
  }
});

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

const TopPage = () => {
  // const classes = useStyles();
  // return <Button className={classes.root}>Styled with Hook API</Button>;
  return (
    <Fragment>
      <Button variant='contained' color='primary'>
        Styled components
      </Button>
      <ThemeProvider theme={theme}>
        <Typography variant='h1' component='h2'>
          h1. Heading
        </Typography>
      </ThemeProvider>
    </Fragment>
  );
};

export default TopPage;
