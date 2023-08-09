import React from "react";
import "../CSS/Home.css";
import Ill1 from "../images/ill-1.png";
import Ill2 from "../images/ill-2.png";
import Ill3 from "../images/ill-3.png";
import Ill4 from "../images/ill-4.png";

export const Home = () => {
  return (
    <>
      <br id="Home" />
      <main className="main--one">
        <div className="info--one">
          <span>
            <h3>
              Welcome to Google Developer Student Clubs (GDSC) at PRMIT&R ✨
            </h3>
          </span>
          <span>
            GDSC is a global program initiated by Google Developers that aims to
            provide a space for students to learn, collaborate, and build
            solutions for real-world challenges using Google technologies. At
            <span className="colored--text"> PRMIT&R</span>, we are proud to
            host a vibrant and enthusiastic{" "}
            <span className="colored--text"> GDSC </span>
            community, dedicated to empowering students with the skills and
            knowledge needed to thrive in the rapidly evolving technology
            landscape.
          </span>
          <br />
          <br />
          <span>
            <h3>What is GDSC ? 👨🏻‍💻</h3>
          </span>
          <span>
            Google Developer Student Clubs is a student-led initiative that
            brings together young minds passionate about technology and
            <span className="colored--text"> Innovation</span>. We foster a
            diverse and inclusive community that encourages creativity, critical
            thinking, and problem-solving through various hands-on learning
            experiences. GDSC at PRMIT&R offers a platform where students can
            explore the latest developments in technology, connect with
            like-minded peers, and engage in exciting projects that make a
            positive impact on society.
          </span>
          <br />
          <br />
          <span>
            <h3>Our Mission 🚀</h3>
          </span>
          <span>
            Our mission is to cultivate a culture of continuous learning and
            collaboration, empowering students to become tech-savvy leaders and
            changemakers in their respective fields. We strive to create an
            environment where individuals can enhance their{" "}
            <span className="colored--text"> technical skills</span>, gain
            exposure to cutting-edge tools and technologies, and find their own
            unique path in the world of tech.
          </span>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="image--one"
        >
          <img src={Ill2} className="Display--img-1" alt="displayimg1" />
        </div>
      </main>
      <main className="main--two">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="image--two"
        >
          <img src={Ill1} className="Display--img-2" alt="displayimg1" />
        </div>
        <div className="info--two">
          <span>
            <h2>🧿 What We Offer -</h2>
          </span>
          <span>
            <span>
              <h3>📍Workshops and Webinars:</h3>
            </span>
            <span>
              GDSC at PRMIT&R conducts
              <span className="colored--text"> workshops and webinars </span>{" "}
              that cover a wide range of topics, including web development,
              mobile app development, machine learning, cloud computing, and
              more. Our experienced mentors and industry experts guide
              participants through interactive sessions, helping them grasp
              complex concepts in a fun and engaging way.
            </span>
            <span>
              <h3>📍Hackathons and Projects:</h3>
            </span>
            <span>
              We organize hackathons and collaborative projects that challenge
              participants to apply their knowledge and creativity to solve
              real-world problems. These events provide an excellent{" "}
              <span className="colored--text"> opportunity </span>
              to work in teams, gain practical experience, and present
              innovative solutions to a panel of judges.
            </span>
            <span>
              <h3>📍Industry Talks and Networking:</h3>
            </span>
            <span>
              GDSC provides students with opportunities to connect with
              professionals and leaders from the{" "}
              <span className="colored--text"> tech industry</span>. Our guest
              speaker sessions and networking events open doors to valuable
              insights, career advice, and potential internship or job
              opportunities.
            </span>
            <span>
              <h3>📍Google Resources and Support:</h3>
            </span>
            <span>
              As an official Google initiative, GDSC members at PRMIT&R gain
              access to various Google resources, including Google Cloud
              credits, API access, and learning materials, enabling them to
              leverage <span className="colored--text"> powerful </span>tools in
              their projects and endeavors.
            </span>
          </span>
        </div>
      </main>
      <main className="main--three">
        <div className="info--three">
          <span>
            <h3>🎯 Our Goals - Empowering Tomorrow's Innovators</h3>
          </span>
          <span>
            At PRMIT&R's Google Developer Student Clubs (GDSC), our primary
            focus is to empower students with the skills, knowledge, and
            opportunities they need to become the innovators and leaders of
            tomorrow. We are committed to creating a{" "}
            <span className="colored--text"> dynamic learning </span>
            environment that fosters personal growth, technical excellence, and
            a passion for making a positive impact on society. Our goals are
            centered around the following core principles:
          </span>
          <span>
            <h3>1. Skill Development: 🏆</h3>
          </span>
          <span>
            Our foremost goal is to equip students with the technical skills
            necessary to thrive in the rapidly evolving world of technology. We
            offer a diverse range of workshops, webinars, and hands-on sessions
            that cover various domains, including web development, mobile app
            development, data science,{" "}
            <span className="colored--text"> artificial intelligence</span>, and
            more. By providing access to cutting-edge technologies and
            industry-relevant tools, we empower our members to build practical
            solutions to real-world challenges.
          </span>
          <span>
            <h3>2. Community Building: 🤝</h3>
          </span>
          <span>
            At GDSC, we believe that collaboration and community are essential
            for growth and success. Our goal is to create a vibrant and
            inclusive community of{" "}
            <span className="colored--text"> tech enthusiasts</span>, where
            students from diverse backgrounds come together to share knowledge,
            ideas, and experiences. We promote a culture of peer-to-peer
            learning, mentorship, and teamwork, fostering an environment where
            everyone's unique perspectives are valued and respected.
          </span>
          <span>
            <h3>3. Innovation and Creativity: ⚒️</h3>
          </span>
          <span>
            We encourage our members to think outside the box and push the
            boundaries of innovation. GDSC provides a platform for students to
            unleash their creativity, experiment with new ideas, and turn their
            visions into reality. Through{" "}
            <span className="colored--text"> hackathons</span>, projects, and
            innovation challenges, we inspire our members to become creative
            problem solvers who can make a meaningful impact in the tech
            industry and beyond.
          </span>
          <span>
            <h3>4. Industry Readiness: 🦺</h3>
          </span>
          <span>
            Preparing our members for successful careers in technology is a core
            goal of GDSC. We aim to bridge the gap between academic learning and
            industry demands by organizing industry talks, networking events,
            and workshops on professional development. By providing insights
            into industry trends, skills sought by employers, and{" "}
            <span className="colored--text"> interview preparation</span>, we
            strive to make our members industry-ready and confident in their job
            pursuits.
          </span>
          <span>
            <h3>5. Social Impact: 📢</h3>
          </span>
          <span>
            Technology has the power to transform lives and solve critical
            societal challenges. At GDSC, we emphasize the importance of
            leveraging technology for social good. Our goal is to inspire our
            members to apply their technical expertise to address real-world
            problems and contribute positively to their communities. Through
            social impact initiatives, hackathons with a purpose, and
            collaborations with <span className="colored--text"> NGOs</span>, we
            aim to instill a sense of responsibility and empathy in our members.
          </span>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="image--three"
        >
          <img src={Ill4} className="Display--img-3" alt="displayimg1" />
        </div>
      </main>
      <main className="main--four">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="image--four"
        >
          <img src={Ill3} className="Display--img-4" alt="displayimg1" />
        </div>
        <div className="info--two">
          <span>
            <h3>
              🎫 The Benefits of Being a Member - Why Join GDSC at PRMIT&R
            </h3>
          </span>
          <span>
            Joining the Google Developer Student Clubs (GDSC) at PRMIT&R opens
            up a world of exciting opportunities and enriching experiences for
            students passionate about technology and innovation. As a GDSC
            member, you become part of a supportive community of like-minded
            individuals, gaining access to a plethora of{" "}
            <span className="colored--text"> Benefits </span> that will
            accelerate your personal and professional growth.
          </span>
          <span>
            <h3>1. Technical Excellence: ⚙️</h3>
          </span>
          <span>
            GDSC offers a multitude of technical workshops, hands-on sessions,
            and webinars conducted by industry experts and seasoned
            professionals. As a member, you get to dive deep into various
            domains, including web development, mobile app development,
            <span className="colored--text"> machine learning</span>, cloud
            computing, and more. Enhance your coding skills, explore
            cutting-edge technologies, and stay up-to-date with the latest
            trends in the tech world.
          </span>
          <span>
            <h3>2. Networking and Collaboration: 🧔🏻‍♂️</h3>
          </span>
          <span>
            GDSC is more than just a club; it's a thriving community of tech
            enthusiasts. Being a part of GDSC at PRMIT&R, you have the
            opportunity to collaborate with peers, share ideas, and work on
            exciting <span className="colored--text"> Projects </span> together.
            Networking events and guest speaker sessions provide valuable
            connections with professionals from the tech industry, opening doors
            to potential internships and job opportunities.
          </span>
          <span>
            <h3>3. Access to Google Resources: 🌟</h3>
          </span>
          <span>
            As an official Google initiative, GDSC members at PRMIT&R gain
            access to exclusive Google resources, including Google Cloud
            credits, APIs, and learning materials.
            <span className="colored--text"> Leverage </span> the power of
            Google's vast ecosystem to fuel your projects and experiments,
            giving you a competitive edge in the tech arena.
          </span>
          <span>
            <h3>4. Skill Validation and Certifications: 🎖️</h3>
          </span>
          <span>
            GDSC provides a platform to validate your technical expertise and
            enhance your resume. Participating in workshops, hackathons, and
            projects not only hones your skills but also adds credibility to
            your profile. Additionally, GDSC offers opportunities to earn
            <span className="colored--text"> Certifications</span>, showcasing
            your proficiency in various Google technologies.
          </span>
        </div>
      </main>
    </>
  );
};
