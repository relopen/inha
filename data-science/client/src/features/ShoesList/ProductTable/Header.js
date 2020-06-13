import React from "react";

const stateImg = {
  none: "https://cdn.upbit.com/images/ico_up_down.0a6c534.png",
  up: "https://cdn.upbit.com/images/ico_up_down_1.3d56f71.png",
  down: "https://cdn.upbit.com/images/ico_up_down_2.a48699e.png",
};

const Header = () => {
  return (
    <table>
      <colgroup>
        <col width="26" />
        <col width="26" />
        <col width="94" />
        <col width="88" />
        <col width="78" />
        <col width="*" />
      </colgroup>
      <thead>
        <tr>
          <th colspan="4">
            <a href="#">한글명</a>
          </th>
          <th>
            <a href="#">
              현재가 <img src={stateImg.none} alt="" />
            </a>
          </th>
          <th>
            <a href="#">
              거래대금 <img src={stateImg.down} alt="" />
            </a>
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
