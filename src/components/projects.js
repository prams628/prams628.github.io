import React, { useState } from "react";
import { priorityProjectsCount, projectDetails } from "./info/projectConfig";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as GitHub } from "./icons/github.svg";
import { ReactComponent as Document } from "./icons/document.svg";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

const TitleLink = styled(Link)`
  color: #c9d1d9;
  :hover {
    color: #ffffff;
  }
`;

const Table = styled.table`
  tbody {
    tr {
      transition: all 0.5s ease;
    }
  }
`

const IndividualSlide = styled.div`
  div {
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const Button = styled.div`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #11b08f;
  border-color: #11b08f;
  text-align: center;
  margin: auto;
  display: flex;
  display: grid;
  :hover {
      color: #fff;
      background-color: #11b08f;
      border-color: #11b08f;
  }
`

const slideStyle = {
}

const getLinkOrPlainTitle = (row) => {
  return (
    <>
      { row.title }
      <div style={{ display: "flex", marginTop: "0.5rem" }} >
      { row.titleLink &&
        <TitleLink to={row.titleLink} target="_blank" rel="noopener noreferrer">
          <GitHub className="arrow" fill="#c9d1d9"/>
        </TitleLink>
      }
      {
        row.reportLink &&
        <>
          <div style={{ marginRight: "1rem" }}/>
          <TitleLink to={row.reportLink} target="_blank" rel="noopener noreferrer">
            <Document className="arrow" fill="#c9d1d9"/>
          </TitleLink>
        </>
      }
      </div>
    </>
  )
}

function Tabular(rows) {

  return (
    <Table>
      <tbody>
        {rows.map((row, i) => (
          <tr>
            <td>
              <h3>{getLinkOrPlainTitle(row)}</h3>
              {
                row.summary &&
                <ul>
                  {row.summary.map((rowSummary, _i) => (
                    <li>{rowSummary}</li>
                  ))}
                </ul>
              }
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>
  );
}

function SlideShow(rows) {
  return (
    <Slide autoplay={false} style={slideStyle}>
      {rows.map((row, i) => (
        <IndividualSlide>
          <div>
            <h3>{getLinkOrPlainTitle(row)}</h3>
            {
              row.summary &&
              <ul>
                {row.summary.map((rowSummary, _i) => (
                  <li>{rowSummary}</li>
                ))}
              </ul>
            }
          </div>
        </IndividualSlide>
      ))}
    </Slide>
  )
}

function Projects() {
  const [ showArchive, setShowArchive ] = useState(false);
  return (
    <>
      <h1 style={{
        fontSize: "60px"
      }}>Projects</h1>
      {Tabular(projectDetails.slice(0, priorityProjectsCount))}
      {
        showArchive &&
        SlideShow(projectDetails.slice(
          priorityProjectsCount,
          projectDetails.length
        ))
      }
      <Button
        onClick={ () => setShowArchive(!showArchive) }
      >{showArchive ? "Collapse" : "View More"}</Button>
    </>
  );
}

export default Projects;