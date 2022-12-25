import "./CompanyCard.css";
import Card from "./Card";
import Data from "../db.json";
import Search from "./Search";
import { useState } from "react";
import { useEffect } from "react";

const CompanyCard = () => {
  const [data, setData] = useState([...Data]);
  const [selectData, setSelectData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const handleData = (e) => {
    // console.log(typeof(e), e[e.length-1].value,"companyCard 1111");
    let val = e[e.length - 1].value;
    setSelectData([...selectData, val]);
  };

  let flag = false;

  // useEffect(() => {
  //   Data.filter((e) => {
  //     // console.log(e, "e.TechStacks");
  //     console.log(selectData, "companyCard 2222");
  //     for (let i = 0; i < selectData.length; i++) {
  //       for (let j = 0; j < e.TechStacks.length; j++) {
  //         if (selectData[i] !== e.TechStacks[j]) {
  //           continue;
  //         } else {
  //           flag = true;
  //           break;
  //         }
  //         // console.log('SelectData', selectData);
  //         //  console.log('tech Data', e.TechStacks);
  //         // return selectData[i] === e.TechStacks[j]
  //       }

  //       if (flag){
  //         setFinalData([...finalData, e]);
  //       }
  //     }
  //   });

  //   //  console.log(Data.filter((e)=>{
  //   //          console.log(selectData?.filter((selectData =>{ e.TechStacks.includes(selectData)
  //   // console.log(selectData,e.TechStacks, "inner dataa");
  //   // })),"sdsdsdsd");
  //   //   }), "Dataaaa");
  // }, [selectData]);

  let obj = {};

  for (let i = 0 ; i < finalData.length; i++){
    if( obj[finalData[i].id] == undefined ){
      obj[finalData[i].id] = finalData[i];
    }
  }


  console.log(obj,'objectttt')

  for (let i = 0 ; i < Data.length; i++){
    for (let j = 0; j< selectData.length; j++){
      if (Data[i].TechStacks.includes(selectData[j])){
        if (!obj[Data[i].id]){
          setFinalData([...finalData, Data[i]]);
        }
      }
    }
  }


















  console.log(finalData, "finalData");
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
          {/* <div
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
                      name={Data[0].CompanyTitle}
                      size="100"
                      round={true}
                    />
                  </div>
                  <div className="leftSection2">
                    <div className="companyTitle">{Data[0].CompanyTitle}</div>
                    <div className="companyRole">{Data[0].JobRole}</div>
                    <div className="companyJobDetails">
                      <div>{Data[0].JobDetails[0]}</div>
                      <div
                        style={{
                          height: "3px",
                          width: "3px",
                          backgroundColor: "lightgrey",
                          border: "1px solid lightgrey",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div>{Data[0].JobDetails[1]}</div>
                      <div
                        style={{
                          height: "3px",
                          width: "3px",
                          backgroundColor: "lightgrey",
                          border: "1px solid lightgrey",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div>{Data[0].JobDetails[2]}</div>
                    </div>
                  </div>
                </div>
                <div className="rightSection">
                  <div onMouseOver={handleTagsHover} style={{ backgroundColor: tagHover ? "#66a5a5" : "#EBF3F5" , color : tagHover ? "#fff" : "#66a5a5"}} onMouseLeave={handleTagsLeave} className="techTags">{Data[0].TechStacks[0]}</div>
                  <div className="techTags">{Data[0].TechStacks[1]}</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
