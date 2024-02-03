import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Model from "../../assets/browser3DModel.png";
import classes from "./HomeHero.module.css";
import { Text } from "@mantine/core";
const HomeHero = () => {
  return (
    <Container fluid className={`px-4 py-5 ${classes.wrapper}`}>
      <Row className="justify-content-center align-items-center g-5 py-5">
        <Col lg={6} xl={7}>
          <div className="lc-block mb-3 ml-5">
            <h2 className={`${classes.title} display-2`}>
              Welcome to your{" "}
              <Text
                variant="gradient"
                gradient={{ from: "#a78bfa", to: "#60a5fa", deg: 0 }}
                inherit
              >
                technology makerspace!
              </Text>
            </h2>
            <p className={`${classes.description}`}>
              Come find your next makerspace with our easy to use and reliable
              website!
            </p>
          </div>

          <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-center ml-5 ">
            <Button
              variant="primary"
              className={`${classes.control} px-4 me-md-2`}
              href="#"
              role="button"
            >
              Get Started
            </Button>
          </div>
        </Col>
        <Col lg={6} xl={5}>
          <img
            src={Model}
            className={`d-block mx-lg-auto img-fluid ${classes.image}`}
            alt=""
            loading="lazy"
            draggable="false"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeHero;
