import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

const Search = (props) => {
  const options = [
    { value: "Frontend", label: "Frontend" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "JAVA", label: "JAVA" },
    { value: "Jest", label: "Jest" },
    { value: "Mocha", label: "Mocha" },
    { value: "Blackbox", label: "Blackbox" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "SQL", label: "SQL" },
    { value: "Express", label: "Express" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "ReactJs", label: "ReactJs" }
  ];

  const handleChange = (e) => {
    props.handleData(e);
  };

  return (
    <>
      <div className="searchInputContainer">
        <Select
          onChange={handleChange}
          options={options}
          isMulti
          className="basic-multi-select"
          styles={{width:"100%",border:"1px solid red"}}
        />
      </div>
    </>
  );
};

export default Search;
