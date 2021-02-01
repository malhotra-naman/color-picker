const styles = {
  root: {
    backgroundColor: "blue",
    height: "200vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
    gridGap: "5%",
  },
};

export default styles;
