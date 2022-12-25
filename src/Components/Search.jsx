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
  ];

//   const [input, setInput] = useState([]);
//   const [inputValue, setinputValue] = useState([]);

  const handleChange = (e) => {
    // setInput(e);
    // console.log(e,"search input data")
    // console.log(e,"search input data", input );
    props.handleData(e);
  };

//   useEffect(() => {
//     for (let i = 0; i < input.length; i++) {
//       setinputValue([...inputValue, input[i].value]);
//     }
//   }, [input]);

  return (
    <>
      <div className="searchInputContainer">
        {/* <input className="searchInput" />
            <p>Clear</p> */}
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
