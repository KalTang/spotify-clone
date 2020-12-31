//IMPORTED LIBRARIES
import React, { useEffect } from "react";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

//IMPORTED COMPONENTS
import Home from "./components/Home";
import Libary from "./components/Library";
import Playlist from "./components/PlayList";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Player from "./components/Player";

//IMPORTED FUNCTIONS
import { getTokenFromUrl } from "./utils/spotify";
import { useDataLayerValue } from "./utils/DataLayer";

//create new spotify object
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //this is fired when Url is changed, will extract token and then clear url for security
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //dispatch user info to the data layer for access later on
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcPW5KZjXYO5l").then((discover_weekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly,
        });
      });

      spotify.getMyRecentlyPlayedTracks().then((recent_tracks) => {
        dispatch({
          type: "SET_RECENTLY_PLAYED_TRACKS",
          recent_tracks: recent_tracks,
        });
      });
    }
  }, []);

  return (
    <React.Fragment>
      {token ? (
        <Router>
          {/* <Navbar /> */}
          <Player spotify={spotify} />

          {/* <main>
            <Switch>
              <Route path="/myLibrary" component={Libary} />
              <Route path="/myPlaylists" component={Playlist} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/notFound" component={NotFound} />
              <Redirect from="/home" to="/" />
              <Route path="/" component={Player} />
              <Redirect to="notFound" />
            </Switch>
          </main> */}
        </Router>
      ) : (
        <Login />
      )}
    </React.Fragment>
  );
}

export default App;
