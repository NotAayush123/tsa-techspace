import { useEffect, useState } from "react";
import classes from "./Timeline.module.css";
import logo from "../../assets/Techspace.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeEvent() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("impact");

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

  let timelineElements = [
    {
      id: 1,
      title: "First Founded",
      location: "Middletown, Delaware",
      description:
        "In January 2024, Techspace was established with the goal of creating a positive impact on the world. We started our journey by connecting curious minds to opportunites, using React, Mantine, and so many other frameworks!",
      date: "January 2024 - present",
      icon: "info",
    },
    {
      id: 2,
      title: "3,000 Members Signed Up",
      location: "Delaware, New Jersey, and Maryland",
      description:
        "We got 2,000 volunteers to learn and have fun at makerspaces!",

      date: "August 2016 - present",
      icon: "person",
    },
    {
      id: 3,
      title: "Biggest Makerspace Ever",
      location: "Appoquinimink Library",
      description:
        "Our biggest makerspace, where almost 1,000 people came to have learn and have fun!",

      date: "March 29, 2021",
      icon: "hand",
    },
    {
      id: 4,
      title: "20,000 hours reached!",
      location: "Techspace",
      description:
        "Almost 20,000 hours have been spent on our platform, learning and having fun!",

      date: "May 25, 2022 - June 4, 2022",
      icon: "clock",
    },
    {
      id: 5,
      title: "15 Different Categories",
      location: "Delaware and Nearby Areas",
      description: "We started having 15 different categories of events!",

      date: "July 25, 2022 - August 9, 2022",
      icon: "category",
    },
    {
      id: 6,
      title: "Ongoing Support",
      location: "Delaware and Nearby Areas",
      description:
        "Continuing our mission to make a positive impact on the world!",
      date: "2022 - present",
      icon: "info",
    },
  ];
  return (
    <div id="impact">
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Our Impact
      </h3>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let iconClass = "";
          let iconStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };

          switch (element.icon) {
            case "category":
              iconClass = "fa-solid fa-layer-group";
              iconStyle.backgroundColor = "#60a5fa";
              break;
            case "hand":
              iconClass = "fa-solid fa-hand-holding-heart";
              iconStyle.backgroundColor = "#fdba74";
              break;
            case "clock":
              iconClass = "fa-solid fa-clock";
              iconStyle.backgroundColor = "#bef264";
              break;
            case "person":
              iconClass = "fa-solid fa-person";
              iconStyle.backgroundColor = "#fef08a";
              break;
            default:
          }

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName={classes.date}
              icon={
                iconClass ? (
                  <i className={`${iconClass} fa-2x `}></i>
                ) : (
                  <img src={logo} className={classes.logo} alt="Company Logo" />
                )
              }
              iconStyle={iconStyle}
            >
              <h3 className={classes.verticalTimelineElementTitle}>
                {element.title}
              </h3>
              <h5 className={classes.verticalTimelineElementSubtitle}>
                {element.location}
              </h5>
              <p className={classes.description}>{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimeEvent;
