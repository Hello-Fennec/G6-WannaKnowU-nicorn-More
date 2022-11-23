import React from "react";
import "./page.css";
import unicorn5 from '../images/unicornpage5.png';
import person5 from '../images/personpage5.png';

function Page5() {
  return (
    <div className="Page5">
      <div className="page5-bg">
        <div className="pic5">
          <img src={unicorn5} class="unicorn_p5"></img>
          <img src={person5} class="person_p5"></img>
        </div>
      </div>
    </div>
  );
}

export default Page5;