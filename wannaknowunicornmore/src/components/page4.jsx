import React from "react";
import "./page.css";
import unicorn4 from '../images/unicornpage4.png';
import person4 from '../images/personpage4.png';

function Page4() {
  return (
    <div className="Page4">
      <div className="page4-bg">
        <div className="pic4">
          <img src={person4} class="person_p4"></img>
          <img src={unicorn4} class="unicorn_p4"></img>
        </div>
      </div>
    </div>
  );
}

export default Page4;