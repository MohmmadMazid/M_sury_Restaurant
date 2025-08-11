import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" id="notFound" />
          <h1>LOOKS LIKE YOU ARE LOST</h1>
          <p>we can't seems to find you the page you are looking for </p>
          <Link to={"/"}>
            Back To Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NoteFound;
