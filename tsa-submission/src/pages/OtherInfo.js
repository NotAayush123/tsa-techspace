import React from "react";
import { Container } from "react-bootstrap";
import Worklog from "../assets/worklog.jpg";
import Checklist from "../assets/copyrightChecklist.jpg";
const OtherInfo = () => {
  return (
    <Container>
      <h1 className="text-white mt-5">Copyright Checklist</h1>
      <img src={Checklist} alt="" className="img-fluid" />
      <h1 className="text-white mt-5">Worklog</h1>
      <img src={Worklog} alt="" className="img-fluid" />
      <h1 className="text-white mt-5">Citations</h1>
      <a
        style={{ fontSize: "1.2rem", color: "#60a5fa" }}
        href="https://docs.google.com/document/d/1UmNIT1dCwB5oyMApv0tYapKRiDgBjCw-PmYAhYUrl6Y/edit?usp=sharing"
      >
        Click here!
      </a>
    </Container>
  );
};

export default OtherInfo;
