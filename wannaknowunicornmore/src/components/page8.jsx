import React from "react";
import "./page.css";
import unicorn8_1 from '../images/unicorn1page8.png';
import unicorn8_2 from '../images/unicorn2page8.png';
import person8 from '../images/personpage8.png';

function Page8() {
  return (
    <div className="Page8">
      <div className="page8-bg">
        <div className="pic8">
          <img className="unicorn1_p8" src={unicorn8_1}></img>
        </div>
        <p className="text8">ที่เขาของมันมีพลังวิเศษ ช่วยรักษาคนเจ็บได้</p>

        <div className="pic8_2">
          <img className="person_p8" src={person8}></img>
        </div>
        <p className="text8_2">ในตำนานเล่าว่าหากเลือดของยูนิคอร์น หลั่งออกมาเมื่อใด <br/>ปีศาจร้ายจะเกิดขึ้น ถ้าเลือดของยูนิคอร์นไหลลงพื้นดินจะทำให้ <br/>ทุกสิ่งทุก อย่างที่โดนเลือดของมันตาย<br/> ไม่ว่าจะอะไรก็ตามเมื่อโดนเลือดของมันต้องตาย ทั้งหมด</p>
        <div className="pic8_3">
          <img className="unicorn2_p8" src={unicorn8_2}></img>
        </div>
      </div>
    </div>
  );
}

export default Page8;
