import React, { Component } from  "react";
import styled from "styled-components";
import { educationDetails } from "./info/educationConfig";

const StyledEducationSection = styled.section`
  /* CSS of the section as a whole */
  /* padding-left: 20%;
  padding-top: 5%;
  padding-right: 20%; */
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
    transform: scale(1.05);
  }

  table {
    tbody {
      tr {
        td {
          ul {
            .inlineList {
              display: inline;
              font-family: "Lucida Console", "Courier New", monospace;
              margin-left: 6px;
              margin-right: 6px;
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }

`


class Education extends Component {

  constructor(props) {
    super(props);
    this.educationRow = this.educationRow.bind(this);
  }

  educationRow = (row, idx) => {
    return (
      <>
        <tr className="experienceRow">
          <td className="dateColumn">
            {row.date}
          </td>
          <td className="col2">
            <h3 style={{ color: "#ffffff" }}>{row.degree}</h3>
            <h4 style={{ color: "#ffffff" }}>{row.institution}</h4>
            <p>{row.location}</p>
            {row.courses.length > 0 && (
              <>
                <h5 style={{
                  marginTop: "10px"
                }}>Notable courses include</h5>
                <ul
                  style={{
                    columnCount: Math.floor(row.courses.length / 2).toString()
                  }}
                >
                {row.courses.map((item, i) => (
                  <li key={row.keyPrefix + i} className="inlineList">
                    <div style={{
                      borderRadius: "0.3rem",
                      color: item.completed ? "#11b08f" : "#111827",
                      textAlign: "center",
                      fontSize: "12px"
                    }}>
                      {item.name}
                    </div>
                  </li>
                ))}
                </ul>
              </>
            )}
            <div className="spacer"/>
          </td>
        </tr>
      </>
    )
  }

  render() {
    return (
      <StyledEducationSection>
        <div className="spacer"/>
        <h1>Education</h1>
        <div className="spacer"/>
        <table style={{ tableLayout: "auto" }}>
          <tbody>
          {educationDetails.map((item, i) => (
            this.educationRow(item, i)
          ))}
          </tbody>
        </table>
      </StyledEducationSection>
    );
  }
}

export default Education;