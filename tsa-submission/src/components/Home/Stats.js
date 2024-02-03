import { Text } from "@mantine/core";
import classes from "./Stats.module.css";
import { useState, useEffect } from "react";

export function Stats() {
  const [people, setPeople] = useState(0);
  const [events, setEvents] = useState(0);
  const [parks, setParks] = useState(0);

  const data = [
    {
      title: "Members",
      targetValue: 32123,
      description: "Over 32,000 people helped with community service events!",
    },
    {
      title: "Events Made",
      targetValue: 2175,
      description: "Over 2,000 events have been posted and done!",
    },
    {
      title: "Categories",
      targetValue: 15,
      description: "We have over 15 different categories!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          data.forEach((stat) => {
            const incrementValue = Math.ceil(stat.targetValue / 1000);
            let currentValue = 0;

            const interval = setInterval(() => {
              if (currentValue < stat.targetValue) {
                if (stat.title === "Members") {
                  setPeople((prevPeople) =>
                    prevPeople + incrementValue <= stat.targetValue
                      ? prevPeople + incrementValue
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                } else if (stat.title === "Events Made") {
                  setEvents((prevEvents) =>
                    prevEvents + incrementValue <= stat.targetValue
                      ? prevEvents + incrementValue
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                } else if (stat.title === "Categories") {
                  setParks((prevParks) =>
                    prevParks + incrementValue <= stat.targetValue
                      ? prevParks + Math.ceil(stat.targetValue / 10000)
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                }
              } else {
                clearInterval(interval);
              }
            }, 1);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector(`.${classes.root}`));

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>
        {stat.title === "Members"
          ? people
          : stat.title === "Events Made"
          ? events
          : parks}
      </Text>
      <Text className={classes.title}>
        {stat.title === "Members" ? (
          <div>
            {stat.title} <i className="fa-solid fa-user"></i>
          </div>
        ) : stat.title === "Events Made" ? (
          <div>
            {stat.title} <i className="fa-regular fa-calendar"></i>
          </div>
        ) : (
          <div>
            {stat.title} <i className="fa-solid fa-tree"></i>
          </div>
        )}{" "}
      </Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));

  return <div className={classes.root}>{stats}</div>;
}
