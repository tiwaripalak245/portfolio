import React from "react";
import "../Experience/Experience.css";
import HeadButton from "../HeadingButton/HeadButton";

const Experience = () => {
  return (
    <>
      <div className="button-box" data-aos="fade-up" data-aos-duration="3000">
        <button className="head-button">Experience</button>
      </div>
      <div
        className="exp-cards"
        id="experience"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="card red">
          <h2>Full Stack Developer</h2>
          <span className="duration">
            <h5>Aimfortech</h5>
          </span>
          <p>
            I gained valuable hands-on experience working with the MERN
            (MongoDB, Express.js, React, Node.js) stack. Collaborating closely
            with senior developers, I contributed to the development and
            maintenance of web applications from conception to deployment.
            Participated in the design and implementation of user-friendly
            interfaces using React.js, ensuring seamless navigation and optimal
            user experience. Utilized Node.js and Express.js to develop robust
            backend services, handling data management, authentication, and API
            integration. Leveraged MongoDB for efficient data storage and
            retrieval, implementing database schemas and queries to support
            application functionality.
          </p>
          {/* <h1 className="tip">Hover Me</h1>
        <p className="second-text">FOLLOW ME MY BROO</p> */}
        </div>
        <div className="card white" data-aos="fade-up" data-aos-duration="3000">
          <h2>Digital Marketing Executive</h2>
          <span className="duration">
            <h5>MMF Infotech Technologies</h5>
          </span>
          <p>
            My primary responsibilities revolved around developing and executing
            comprehensive SEO strategies to enhance online visibility and drive
            organic traffic growth. This involved conducting meticulous keyword
            research and analysis, optimizing website content and structure for
            improved search engine rankings, and closely monitoring website
            performance using tools like Google Analytics. I collaborated
            closely with cross-functional teams, including content creators,
            developers, and marketers, to align SEO efforts with broader
            business objectives. I leveraged various industry-standard tools and
            technologies, including SEMrush, Ahrefs, Moz, and Google Search
            Console, to streamline SEO processes and drive results effectively.
          </p>
        </div>
        <div className="card blue" data-aos="fade-up" data-aos-duration="3000">
          <h2>SEO Executive</h2>
          <span className="duration">
            <h5>Argalon Technologies</h5>
          </span>
          <p>
            Curated, published, and shared engaging content across various
            social media platforms, fostering community growth and driving
            targeted traffic to our website. My responsibilities extended to
            both off-page and on-page SEO strategies, including leveraging
            social media to distribute content and cultivate external links for
            enhanced authority. I conducted thorough keyword research and
            optimization to improve website visibility and search engine
            rankings, utilizing various SEO techniques such as guest posting,
            influencer outreach, and social media marketing to expand our online
            presence. Furthermore, I played a key role in creating graphics for
            social media platforms to enhance content engagement and drive
            organic traffic.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
