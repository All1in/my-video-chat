import { Typography, AppBar } from '@material-ui/core';
import { AppStyles } from "./utils";
import { Notifications } from "@material-ui/icons";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  const classes = AppStyles();

  return (
      <div className={classes.wrapper}>
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography variant="h2" align="center">Video Chat</Typography>
          </AppBar>
          <VideoPlayer />
          <Sidebar>
              <Notifications />
          </Sidebar>
      </div>
  );
}

export default App;
