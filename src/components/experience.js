import React from "react";
import styled from "styled-components";
import ExperienceRow, { workExperience } from "./info/experienceConfig";

const StyledExperienceSection = styled.section`
  /* CSS of the section as a whole */
  /* padding-left: 20%;
  padding-top: 5%;
  padding-right: 20%;*/
  color: #c9d1d9;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  p {
    margin: 0 0 5px 0;
  }

  h1 {
    font-size: 60px;
  }

  .spacer {
    height: 60px;
  }

  .dateColumn {
    vertical-align: top;
    font-size: 15px;
  }

  .col2 {
    padding-left: 30px;
  }

  .experienceRow {
    /* change all to a specific one if multiple kinds of transition are to be used. */
    transition: all 0.5s ease;
  }

  .experienceRow:hover {
    transform: scale(1.05)
  }

`

function Experience() {
  return (
    <StyledExperienceSection>
      <h1>Experience</h1>
      <div className="spacer"/>
      <table style={{ tableLayout: "auto" }}>
        <tbody>
          {workExperience.map((item, i) => (
            ExperienceRow(item)
          ))}
        </tbody>
      </table>
    </StyledExperienceSection>
  )
}

export default Experience;