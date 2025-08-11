import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
// import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">M_SURY</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="home" smooth={true} spy={true} duration={1000}>
            HOME
          </Link>
          <Link to="about" smooth={true} spy={true} duration={1000}>
            ABOUT US
          </Link>
          <Link to="qualities" smooth={true} spy={true} duration={1000}>
            SERVICES
          </Link>
          <Link to="team" smooth={true} spy={true} duration={2000}>
            TEAM
          </Link>
          <Link to="reservation" smooth={true} spy={true} duration={1000}>
            RESERVATION
          </Link>
          <Link to="footer" smooth={true} spy={true} duration={1000}>
            FOOTER
          </Link>
          {/* where-ever u want to move just use the id of the div inside the Link tag */}
          {/* {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })} */}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
