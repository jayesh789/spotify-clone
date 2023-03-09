import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow.jsx";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Body = ({spotify}) => {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="discover_weekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <body className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </body>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track = {item.track} />
        ))}
        {/* List of songs */}
      </div>
    </div>
  );
};

export default Body;
