import { useState } from "react";
import "./Tags.css";

const Tags = (props) => {
  const [tagHover, setTagHover] = useState(false);

  const handleTagsHover = () => {
    setTagHover(true);
  };

  const handleTagsLeave = () => {
    setTagHover(false);
  };

  return (
    <>
      <div
        onMouseOver={handleTagsHover}
        style={{
          backgroundColor: tagHover ? "#66a5a5" : "#EBF3F5",
          color: tagHover ? "#fff" : "#66a5a5",
        }}
        onMouseLeave={handleTagsLeave}
        className="techTags"
      >
        {props.TechStacks}
      </div>
    </>
  );
};

export default Tags;
