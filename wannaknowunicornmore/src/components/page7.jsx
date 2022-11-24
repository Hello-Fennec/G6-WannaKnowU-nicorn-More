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
        </div>
        <p className="text7">ยูนิคอร์นเป็นสัตว์ที่มีความฉลาด เพราะเป็นสัตว์ของเทพเจ้า</p>
        <div className="pic7_2">
          <img className="unicorn1_p7" src={unicorn7_1}></img>
        </div>
        <p className="text7_2">หากตัวที่มีอายุ มากและฉลาดจะสามารถสื่อสารทางจิตได้ <br/>ทั้งยังสามารถอ่านใจและความรู้สึก ของมนุษย์ที่มันอยากจะรู้ได้<br/> ส่วนยูนิคอร์นที่ยังไม่โตเต็มที่ จะสามารถรับได้<br/> เพียงความรู้สึก และอารมณ์ของคนที่อยู่รอบตัวมัน</p>

        <div className="pic7_3">  
          <img className="unicorn2_p7" src={unicorn7_2}></img>
        </div>
        <div className="pic7_4"> 
          <img className="person_p7" src={person7}></img>
        </div>
      </div>
    </div>
  );
}

export default Page7;