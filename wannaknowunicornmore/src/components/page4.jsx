import React from "react";
import "./page.css";
import unicorn4 from '../images/unicornpage4.png';
import person4 from '../images/personpage4.png';

function Page4() {
  return (
    <div className="Page4">
      <div className="page4-bg">
        <div className="pic4">
          <img className="person_p4" src={person4}></img>
        </div>
        <div className="pic4_2">
          <img className="unicorn_p4" src={unicorn4}></img>
        </div>
      </div>
    </div>
  );
}

export default Page4;