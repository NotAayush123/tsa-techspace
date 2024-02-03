import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  Container,
} from "@mantine/core";
import {
  IconDatabase,
  IconPrinter,
  IconCircuitBattery,
  IconHammer,
  IconAccessPoint,
  IconNews,
  IconDeviceGamepad2,
  IconDesk,
  IconRobot,
  IconWindmill,
  IconRocket,
  IconMicroscope,
  Icon360,
  IconLock,
  IconSquareRoot,
} from "@tabler/icons-react";
import classes from "./Categories.module.css";
import { useEffect, useState } from "react";

const mockdata = [
  { title: " 3D Printing ", icon: IconPrinter, color: "violet" },
  { title: "Electrical Circuits", icon: IconCircuitBattery, color: "indigo" },
  { title: "Engineering ", icon: IconHammer, color: "blue" },
  { title: "AI Networks", icon: IconAccessPoint, color: "green" },
  { title: " Website Development", icon: IconNews, color: "teal" },
  { title: " Game Development ", icon: IconDeviceGamepad2, color: "cyan" },
  { title: "Tool Workshop", icon: IconDesk, color: "pink" },
  { title: "Robotics ", icon: IconRobot, color: "red" },
  { title: "Renewable Energy", icon: IconWindmill, color: "orange" },
  { title: "Aerospace ", icon: IconRocket, color: "gray" },
  { title: " Data Science", icon: IconDatabase, color: "lime" },
  { title: "Environmental Science", icon: IconMicroscope, color: "red" },
  {
    title: " Virtual Reality (VR) and Augmented Reality (AR)",
    icon: Icon360,
    color: "orange",
  },
  {
    title: "Cybersecurity ",
    icon: IconLock,
    color: "gray",
  },
  {
    title: "Math",
    icon: IconSquareRoot,
    color: "teal",
  },
];

export function Categories() {
  const theme = useMantineTheme();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("organizations");

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
  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="md" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container size="xl" py="xl" id="organizations">
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Categories
      </h3>

      <Card withBorder radius="md" className={classes.card}>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </Container>
  );
}
