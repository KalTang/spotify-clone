//IMPORTED LIBRARIES
import React, { useEffect, useState } from "react";
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
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  //Runs code based on a given condition

  //this is fired when Url is changed, will extract token and then clear url for security
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }

    console.log("I HAVE A TOKEN >>>", token);
  }, []);

  return (
    <React.Fragment>
      {token ? (
        <Router>
          <Navbar />

          <main>
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
          </main>
        </Router>
      ) : (
        <Login />
      )}
    </React.Fragment>
  );
}

export default App;
