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
        <p className="text4">โดยทั่วไปยูนิคอร์นจะไม่ชอบเข้าใกล้มนุษย์ <br/>และจะยอมให้แม่มดเข้าใกล้ มากกว่าพ่อมด</p>
      </div>
    </div>
  );
}

export default Page4;