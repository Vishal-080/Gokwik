import "./CompanyCard.css";
import Data from "../db.json";
import Tags from "./Tags";
import JobDetailsBar from "./JobDetailsBar";
import Avatar from "react-avatar";
import { useState } from "react";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
        className="companySection"
      >
        <div
          style={{ backgroundColor: hover ? "#66a5a5" : "" }}
          className="hoverpart"
        ></div>
        <div className="company">
          <div className="companyCard">
            <div className="leftSection">
              <div className="leftSection1">
                <Avatar
                  className="avatar"
                  name={props.CompanyTitle}
                  size="100"
                  round={true}
                />
              </div>
              <div className="leftSection2">
                <div className="companyTitle">{props.CompanyTitle}</div>
                <div className="companyRole">{props.CompanyRole}</div>
                <JobDetailsBar data1={props.JobDetails} />
              </div>
            </div>
            <div className="bottomBorder"></div>
          </div>
        </div>
        <div className="rightSection">
          {props.TechStacks.map((e) => (
            <Tags TechStacks={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
