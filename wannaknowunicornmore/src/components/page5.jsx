import React from "react";
import "./page.css";
import unicorn5 from '../images/unicornpage5.png';
import person5 from '../images/personpage5.png';

function Page5() {
  return (
    <div className="Page5">
      <div className="page5-bg">
        <div className="pic5">
          <img className="unicorn_p5" src={unicorn5}></img>
        </div>
        <div className="pic5_2">
          <img className="person_p5" src={person5}></img>
        </div>
      </div>
    </div>
  );
}

export default Page5;