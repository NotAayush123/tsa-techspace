import React, { useEffect, useState } from "react";
import classes from "./Mission.module.css";
import { Row, Col } from "react-bootstrap";
const Mission = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("mission");

    const handleScroll = () => {
      if (isElementInViewport(missionSection)) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.main} mb-5`} id="mission">
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Our Mission
      </h3>
      <div className={`${classes.missionContent} overflow-hidden`}>
        <Row className="flex-lg-nowrap align-items-center g-5">
          <Col lg={6} xl={5}>
            <div className={`${classes.missionText} lc-block mb-4`}>
              <h1
                className={`fw-bold display-4 ${
                  animate ? classes.animateHeader : ""
                } ${classes.mainHeader}`}
              >
                At <span className={classes.highlight}>Techspace</span>, we help
                people learn <span className={classes.highlight}>vital</span>{" "}
                technology related skills, make long-lasting{" "}
                <span className={classes.highlight}>friends</span> to learn
                with, and do it all for{" "}
                <span className={classes.highlight}>free</span>.{" "}
              </h1>
            </div>
          </Col>

          <Col lg={6} xl={7} className="order-lg-1 w-100">
            <img
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
              }}
              src="https://iseusa.org/wp-content/uploads/2017/04/shutterstock_428931997-e1543504561281-thegem-blog-default.jpg"
              className={`d-block mx-lg-auto img-fluid ${classes.mainImg} ${
                animate ? classes.animateImg : ""
              }`}
              alt="Photo by Milad Fakurian"
              loading="lazy"
              width="2160"
              height="768"
              draggable="false"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Mission;
