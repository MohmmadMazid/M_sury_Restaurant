import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setCountdown((prevCount) => {
        // this is making dynamic returning to the home page
        if (prevCount === 1) {
          // when prevcount value will become 1 then return to the home page
          clearInterval(timeOutId);
          navigate("/");
        } else {
          return prevCount - 1; // agr prevCount ki value  one nhi hh to ek kam karte raho until it reaches to one
        }
      });
    }, 1000);
    return () => {
      clearInterval(timeOutId); // this funtion is working like cleanup function which is doing to clear the timeoutId
    };
  }, [navigate]);
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1> Redirecting to Home in {countdown} second...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
