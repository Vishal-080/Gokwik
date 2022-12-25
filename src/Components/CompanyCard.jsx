import "./CompanyCard.css";
import Card from "./Card";
import Data from "../db.json";
import Search from "./Search";
import { useState } from "react";

const CompanyCard = () => {
  const [data, setData] = useState([...Data]);
  const [selectData, setSelectData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const handleData = (e) => {
    // console.log(typeof(e), e[e.length-1].value,"companyCard 1111");
    let val = e[e.length - 1].value;
    setSelectData([...selectData, val]);
  };

  let obj = {};

  for (let i = 0; i < finalData.length; i++) {
    if (obj[finalData[i].id] == undefined) {
      obj[finalData[i].id] = finalData[i];
    }
  }

  // console.log(obj,'objectttt');

  for (let i = 0; i < Data.length; i++) {
    for (let j = 0; j < selectData.length; j++) {
      if (Data[i].TechStacks.includes(selectData[j])) {
        if (!obj[Data[i].id]) {
          setFinalData([...finalData, Data[i]]);
        }
      }
    }
  }

  // console.log(finalData, "finalData");
  // console.log(mydata,"my dataaaaa");

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <Search handleData={handleData} />
          {finalData == 0
            ? data.map((e) => {
                return (
                  <Card
                    CompanyTitle={e.CompanyTitle}
                    CompanyRole={e.JobRole}
                    JobDetails={e.JobDetails}
                    TechStacks={e.TechStacks}
                  />
                );
              })
            : finalData.map((e) => {
                return (
                  <Card
                    CompanyTitle={e.CompanyTitle}
                    CompanyRole={e.JobRole}
                    JobDetails={e.JobDetails}
                    TechStacks={e.TechStacks}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
