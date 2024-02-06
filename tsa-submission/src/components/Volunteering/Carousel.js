import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "./Card";
import "@mantine/carousel/styles.css";

export function CardsCarousel({ date, pastEvents, username, profile }) {
  const initialDate = new Date(date);
  function getNextDayFormatted(initialDate, dayOfWeek) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayOfWeek = initialDate.getDay();
    let difference = dayOfWeek - currentDayOfWeek;

    if (difference <= 0) {
      difference += 7;
    }

    const nextDate = new Date(
      initialDate.getTime() + difference * 24 * 60 * 60 * 1000
    );
    const formattedDate = `${daysOfWeek[dayOfWeek]}, ${nextDate.toLocaleString(
      "en-US",
      { month: "long", day: "numeric", year: "numeric" }
    )}`;
    return formattedDate;
  }
  const nextFridayFormatted = getNextDayFormatted(initialDate, 5);
  const nextSaturdayFormatted = getNextDayFormatted(initialDate, 6);
  const nextSundayFormatted = getNextDayFormatted(initialDate, 0);

  let data = [
    {
      name: "3D Printing at the Library",
      category: "3D Printing",
      image:
        "https://img.freepik.com/free-photo/technology-equipment-blue-laboratory-generated-by-ai_188544-19546.jpg",
      maxSpots: 5,
      address: "204 E West Street",
      time: "3:00 p.m - 5:00 p.m",
      day: nextFridayFormatted,
      usersTask:
        "Come 3D print with others, share techniques, and have fun! Make sure you have a ride back, and you can bring a snack if you want!",
      contactPhone: "302 378-5588",
      contactEmail: "bob.john@gmail.com",
      volunteers: [
        {
          name: " Abby Rogers",
          profilePicture:
            "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Mathew John",
          profilePicture:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Intro to Data Science UD",
      category: "Data Science",
      image:
        "https://cdn.sanity.io/images/tlr8oxjg/production/319736499c3451e5bf944e8ea5843714df354e6a-1456x816.png?w=3840&q=80&fit=clip&auto=format",
      maxSpots: 12,
      address: "590 Avenue 1743, Newark, DE 19713",
      time: "1:00 PM - 5:00 PM",
      day: nextFridayFormatted,
      usersTask:
        "We will learn the basics of data analytics, data manipulation, and machine learning, all of which are basic data science topics! We also do fun activities to help you learn some of the topics discussed. We look forward to seeing you here!",
      contactPhone: "302-554-8974",
      contactEmail: "datasciencelearners@yahoo.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Dan Smith",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Intro to Game Development UD",
      category: "Game Development",
      image:
        "https://assets-global.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png",
      maxSpots: 8,
      address: "590 Avenue 1743, Newark, DE 19713",
      time: "12:00 PM - 4:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "We will have fun learning some of the basics of video game design and Unity. We will also have a contest at the end! We hope to see you soon!",
      contactPhone: "302-778-4983",
      contactEmail: "gamedevedu@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
      ],
    },

    {
      name: "Algebraic Math at the Library",
      category: "Math",
      image:
        "https://www.datanami.com/wp-content/uploads/2015/12/shutterstock_algebra_Marina-Sun.jpg",
      maxSpots: 20,
      address: "204 E Main St, Middletown, DE 19709",
      time: "12:00 PM - 3:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "We will discuss and solve algebraic equations together! We will have some problems where teamwork is involved. We hope you see you there!",
      contactPhone: "302-378-5588",
      contactEmail: "demathlearner@gmail.com",
      volunteers: [
        {
          name: "Aarav Khan",
          profilePicture: "",
        },
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Dan Smith",
          profilePicture: "",
        },
      ],
    },
  ];
  data.forEach((obj2) => {
    // Find the corresponding object in the first array
    const matchingObj = pastEvents.find((obj1) => obj1.eventName === obj2.name);

    // If a match is found, add the "signed: true" property to the second array object
    if (matchingObj) {
      obj2.signed = true;
      obj2.volunteers.push({ name: username, profilePicture: profile });
    }
  });

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ sm: "33%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
    >
      {slides}
    </Carousel>
  );
}
