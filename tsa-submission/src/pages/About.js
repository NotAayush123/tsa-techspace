import { Container, Row, Col } from "react-bootstrap";
import styles from "./About.module.css";
import Reliability from "../assets/Reliability.png";
import Trust from "../assets/Trust.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Container>
        <div className={styles.textContainer}>
          <h4 className={`${styles.info} mt-5`}>
            Helping thousands of people{" "}
            <span style={{ color: "#a78bfa" }}>learn</span>, and managing
            makerspaces can't be <span style={{ color: "#60a5fa" }}>easy</span>.
          </h4>
          <h3 style={{ fontSize: "2em" }}>So how do we do it?</h3>
          <a href="#aboutUs">
            <button className={styles.scrollButton}>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </a>
        </div>
      </Container>
      <div id="aboutUs" className={styles.aboutInfo}>
        <Container>
          <Row>
            <Col
              md={4}
              xs={12}
              className={`d-flex flex-column align-items-center p-2`}
            >
              <div
                style={{ width: "90%", height: "100%" }}
                className={styles.card}
              >
                <img
                  src={Trust}
                  alt=""
                  className="img-fluid"
                  style={{ height: "300px" }}
                />
                <h1 className="text-center">Trust</h1>
                <p className="text-center">
                  Trust is at the core of Techspace. We provide various
                  makerspace opportunities, and your trust is our top priority.
                  We never share your information, and our sole goal is to help
                  people learn and have fun. Your trust fuels the positive
                  change we aim to achieve.
                </p>
              </div>
            </Col>
            <Col
              md={4}
              xs={12}
              className={`d-flex flex-column align-items-center p-2`}
            >
              <div
                style={{ width: "90%", height: "100%" }}
                className={styles.card}
              >
                <img src={Reliability} alt="" className="img-fluid" />
                <h1 className="text-center">Reliability</h1>
                <p className="text-center">
                  Reliability is key at Techspace. We're built on trust and
                  dependability, offering consistent makerspace opportunities.
                  You can rely on us to connect you with meaningful projects.
                  Your trust drives our reliability and integrity.
                </p>
              </div>
            </Col>
            <Col
              md={4}
              xs={12}
              className={`d-flex flex-column align-items-center p-2`}
            >
              <div
                style={{ width: "90%", height: "100%" }}
                className={styles.card}
              >
                <img
                  src="https://res.cloudinary.com/zenbusiness/q_auto/v1/shared-assets/icon/product/money-bag-256.svg"
                  alt=""
                  className="img-fluid"
                  style={{ height: "300px" }}
                />
                <h1 className="text-center">No cost</h1>
                <p className="text-center">
                  At Techspace, we're committed to making a difference without
                  any cost to you. We believe in accessible altruism, providing
                  free technology-related makerspaces that you can trust. Our
                  mission is to ensure that helping people learn knows no
                  financial boundaries.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
