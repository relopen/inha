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
        <col width="16" />
        <col width="94" />
        <col width="88" />
        <col width="88" />
        <col width="*" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan={4}>
            <a>한글명</a>
          </th>
          <th>
            <a>희망구매가</a>
          </th>
          <th>
            <a>희망판매가</a>
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
