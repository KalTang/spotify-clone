import "./App.css";
import React from "react";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/home";
import Libary from "./components/library";
import Playlist from "./components/playlist";
import Login from "./components/login";
import Register from "./components/register";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
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
  );
}

export default App;
