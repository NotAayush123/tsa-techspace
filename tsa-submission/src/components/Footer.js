import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import logo from "../assets/Techspace.png";
import classes from "./Footer.module.css";

const links = [
  { link: "/privacy", label: "Privacy" },
  { link: "/about", label: "About Us" },
  { link: "/otherInfo", label: "Other Info" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
      className={classes.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <a href="" className={classes.specialLink}>
          <img src={logo} className={classes.logo} />
          <p className={classes.name}>Techspace</p>
        </a>
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => {
              window.location.href = "https://twitter.com/Techspace___";
            }}
          >
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => {
              window.location.href = "https://www.youtube.com/@TSAtechspace";
            }}
          >
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => {
              window.location.href = " https://www.instagram.com/techspace___/";
            }}
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
