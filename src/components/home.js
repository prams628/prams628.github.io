import React from "react";
import styled from "styled-components";
import { skills, renderSkill } from "./info/techstack";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";

const StyledAboutSection = styled.section`
  /* CSS of the section as a whole */
  padding-left: 20%;
  padding-top: 5%;
  padding-right: 30%;
  color: #c9d1d9;

  h2{
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
    font-size: 60px;
  }

  .spacedParagraph {
    line-height: 23pt;
  }

  ul {
    line-height: 23pt;
  }

  .skills {
    display: none;
  }

  .skillCategory:hover .skills {
    display: block;
    color: #c9d1d9;
  }

  .skillCategory {
    color: #aff5b4;
  }
`

const About = () => {

  const intro = (
    <p style={{
      fontSize: "30px"
    }}>
      Hello! I'm
    </p>
  );
  const name = <h2>Pramod Nagaraja</h2>;
  const description = (
    <p className="spacedParagraph">
      Hopping over medicine, astronomy, and automobile engineering, my interest in Computer Science started with an interest of making my own game. What started then has only grown, however in a different branch of Computer Science, transforming me into the software engineer I am today. With a profound interest in Data Science and Artificial Intelligence, I also enjoy the visits to the UI/UX realm.
    </p>
  );

  const techstack = (
    <>
      <h3>
        Here's a few technologies I've been working with recently:
      </h3>
      <ul>
        {Object.keys(skills).map((keyName, i) => (
          <li className="skillCategory" key={i}>
            <h4>{keyName}</h4>
            {renderSkill(skills[keyName], "skills")}
          </li>
        ))}
      </ul>
    </>
  );

  const items = [intro, name, description];

  return (
    <StyledAboutSection>
      <section id="home">
        {items.map((item, i) => (
          <div key={i}>
            {item}
          </div>
        ))}
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </StyledAboutSection>
  );
};

export default About;