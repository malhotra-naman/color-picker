import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "white",
      fontWeight: "100",
      fontSize: "80px",
      "& span": {
        backgroundColor: "yellow",
        fontWeight: "800",
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <span>Outside h1</span>
        <h1>
          <span>Cool</span> Stuff! :O
        </h1>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
