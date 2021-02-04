import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    minHeight: "100vh",
    height: "100%",
    overflow: "scroll",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#000000",
    background: `no-repeat center/cover url(${bg})`,
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "80%",
    },
  },
  nav: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
      border: "2px solid white",
      padding: "0.5em 1em",
      backgroundColor: "rgba(0,0,0,0.6)",
      transition: "all 0.1s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.3)",
        transform: "scale(1.1)",
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.5rem",
    },
  },
};

export default styles;
