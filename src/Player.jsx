import React from 'react'
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "./Player.css";

const Player = ({spotiify}) => {
  return (
    <div className='player'>
      <div className="player__body">
        <Sidebar />
        <Body spotiify={spotiify}/>
      </div>
        <Footer />
    </div>
  )
}

export default Player