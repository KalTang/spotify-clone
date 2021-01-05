import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDataLayerValue } from "../utils/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  //const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [{ recent_tracks, discover_weekly }, dispatch] = useDataLayerValue();

  const [playlist, setPlaylist] = useState({ recent_tracks });

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        {/* <img src={discover_weekly?.images[0].url} alt="Discover Weekly" /> */}
        <img
          src="https://images.squarespace-cdn.com/content/565f6687e4b020f4bf3449c0/1507047025896-761NV8Q85B34RMSPP6CT/2ca79f7f364b2c241f132cd4825e3080a85781a3.jpeg?content-type=image%2Fjpeg"
          alt="Discover Weekly"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Recently Played Tracks</h2>
          <p>
            A list of your fresh, recently played tracks. Go ahead, listen
            again.
          </p>
          {/* <p>{discover_weekly?.description}</p> */}
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* List of Songs */}
        {/* <div className="">
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div> */}
        <div className="">
          {recent_tracks?.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>

        {/* {console.log("😝recent", recent_tracks)} */}
      </div>
    </div>
  );
}

export default Body;
