import { Typography, AppBar } from '@material-ui/core';
import { useStyles } from "./utils";


const App = () => {
  const classes = useStyles();

  return (
      <div className={classes.wrapper}>
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography variant="h2" align="center">Video Chat</Typography>
          </AppBar>
      </div>
  );
}

export default App;
