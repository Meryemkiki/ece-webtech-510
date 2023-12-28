import React from 'react';
import {Link} from "react-router-dom";
import HomePic from "../assests/homepic.jpeg";

function Home() {
  return (
    <div classeName ="home">
      <div classeName = "headerContainer" style ={ {backgroundImage : 'url(${HomePic})'}}>
        <h1>Wanderlust Explorer</h1>
        <p> Virtually Explore the World!</p>
        <button> EXPLORE</button>
      </div>
    </div>
  );
}

export default Home