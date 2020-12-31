import React from "react";
import { loginUrl } from "../utils/spotify";

function Login() {
  return (
    <div className="login">
      <h1>sabkuah's weekend project</h1>
      {/* Spotify Logo */}
      <img
        src="https://respect-mag.com/wp-content/uploads/2019/12/spotify-logo-1920x1080_fouoik.jpg"
        alt="spotify-logo"
      />
      {/* Spotify Login Button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
