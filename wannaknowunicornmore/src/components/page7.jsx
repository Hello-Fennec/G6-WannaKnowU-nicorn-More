import React from "react";
import "./page.css";
import starcloud from '../images/starcloud.png'
import unicorn7_1 from '../images/unicorn1page7.png';
import unicorn7_2 from '../images/unicorn2page7.png';
import person7 from '../images/personpage7.png';

function Page7() {
  return (
    <div className="Page7">
      <div className="page7-bg">
        <div className="pic7">
          <img className="star-cloud" src={starcloud}></img>
          <img className="unicorn1_p7" src={unicorn7_1}></img>
        </div>
        <div className="pic7_2">  
          <img className="unicorn2_p7" src={unicorn7_2}></img>
          <img className="person_p7" src={person7}></img>
        </div>
      </div>
    </div>
  );
}

export default Page7;