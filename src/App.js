import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/Home";
import Libary from "./components/Library";
import Playlist from "./components/PlayList";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { getTokenFromUrl } from "./utils/spotify";

function App() {
  const [token, setToken] = useState(null);

  //Runs code based on a given condition

  //this is fired when Url is changed, will extract token and then clear url for security
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I HAVE A TOKEN >>>", token);
  }, []);

  return (
    <React.Fragment>
      {token ? (
        <Router>
          <Navbar />
          <h1>Hi, I am logged in</h1>
          <main>
            <Switch>
              <Route path="/myLibrary" component={Libary} />
              <Route path="/myPlaylists" component={Playlist} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/notFound" component={NotFound} />
              <Redirect from="/home" to="/" />
              <Route path="/" component={Home} />
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
