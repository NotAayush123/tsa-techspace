import React from "react";
import { Container } from "react-bootstrap";
import classes from "./About.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={classes.container}>
      <Container className="mb-5">
        <h1 className="mt-5 text-center">Privacy Policy</h1>
        <p className="text-center">Effective Date: 02/04/2024</p>
        <h2 className="my-2">Privacy Policy</h2>
        <p>
          This Privacy Policy outlines how Techspace collects, uses, discloses,
          and protects the personal information of users who access our platform
          and services related to connecting with makerspaces.
        </p>

        <h3>Information We Collect:</h3>
        <ul>
          <li>
            Personal Information: We may collect and store personal information,
            including but not limited to names, email addresses, and location
            data, to facilitate the connection process with makerspaces.
          </li>
          <li>
            User Content: Information shared voluntarily by users within the
            platform, such as project descriptions, preferences, and other
            relevant details.
          </li>
        </ul>

        <h3>How We Use Your Information:</h3>
        <ul>
          <li>
            Facilitating Connections: Personal information is used to connect
            users with makerspaces based on their preferences and project
            requirements.
          </li>
          <li>
            Platform Improvement: We may analyze aggregated data to enhance our
            services and user experience.
          </li>
        </ul>

        <h3>Information Sharing:</h3>
        <ul>
          <li>
            Makerspaces: Necessary information may be shared with makerspaces to
            facilitate connections and collaborations.
          </li>
          <li>
            Legal Compliance: We may disclose information if required by law or
            to protect our rights and users’ safety.
          </li>
        </ul>

        <h3>Data Security:</h3>
        <p>
          We implement industry-standard security measures to protect your
          personal information. However, no method of transmission or storage is
          entirely secure, and we cannot guarantee absolute security.
        </p>

        <h3>Your Choices:</h3>
        <ul>
          <li>
            Account Information: Users can review, update, or delete their
            account information by contacting us.
          </li>
          <li>
            Communications: You can opt-out of receiving promotional
            communications.
          </li>
        </ul>

        <h3>Cookies and Tracking:</h3>
        <p>
          We may use cookies and similar technologies for analytics and to
          enhance user experience.
        </p>

        <h3>Children’s Privacy:</h3>
        <p>
          Our services are not directed at individuals under the age of 13. We
          do not knowingly collect personal information from children.
        </p>

        <h3>Changes to Privacy Policy:</h3>
        <p>
          We reserve the right to update this Privacy Policy. Users will be
          notified of significant changes.
        </p>

        <h3>Contact Us:</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us on our socials.
        </p>

        <p>
          By using our platform, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
