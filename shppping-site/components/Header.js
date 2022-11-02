import React from "react";

function Header() {
  return (
    <div className="Header">
      <div className="wrapper">
        <div className="left_box">
          <h1>LOGO</h1>
        </div>
        <div className="right_box">
          <ul>
            <li className="notification_parent">
              <a href="">
                <img src="/images/Notification.png" />
                <span>1</span>
              </a>
            </li>
            <li className="porfile">
              <a href="">
                <p>Личный кабинет</p>
                <img src="images/account_icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
