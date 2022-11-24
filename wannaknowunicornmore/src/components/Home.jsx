import React from "react";
import "./Home.css"
import midcloud from '../images/midcloud.png'
import leftcloud from '../images/leftcloud.png'
import rightcloud from '../images/rightcloud.png'
import unicorntext from '../images/unicorntext.png'
import unicornhome from '../images/unicornhome.png'

function Home() {
  return (
    <div className="Unicorn">
      <div className="home-bg">
        <div className="cloud">
          <img className="mid-cloud" src={midcloud}></img>
          <img className="left-cloud" src={leftcloud}></img>
          <img className="right-cloud" src={rightcloud}></img>
        </div>
         <img className="unicorntext" src={unicorntext}></img>
         <img className="unicornhome" src={unicornhome}></img>
      </div>
    </div>
  );
}

export default Home;
