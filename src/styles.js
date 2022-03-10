import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    "& h2": {
      color: "#000",
    },
  },
  button: {
    margin: theme.spacing(2, 0, 0),
  },
  icon: {
    margin: theme.spacing(0, 1, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(5, 0),
  },
}));

export default useStyle;
