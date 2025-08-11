import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      {" "}
      {/* // for the scroll navigation use the id inside the div or section or footer or navbar or span tag */}
      <div className="container">
        <div className="banner">
          <div className="left">Mohmmad Mazid</div>
          <div className="right">
            <p>Street No 256 Jagat Farm Greater Noida</p>
            <p>Open : 9 : 00 am to 12 : 00 am</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Mohmmad Mazid</p>
          </div>
          <div className="right">
            <p> All Rights Reserved By Mohmmad Mazid</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
