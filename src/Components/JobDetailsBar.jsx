import './CompanyCard.css';

const JobDetailsBar = (props) => {
    // console.log(props,'dasssssssssssssssss')
  return (
    <>
      <div className="companyJobDetails">
        <div>{props.data1[0]}</div>
        <div
          className="Dots"
        ></div>
        <div>{props.data1[1]}</div>
        <div
          className="Dots"
        ></div>
        <div>{props.data1[2]}</div>
      </div>
    </>
  );
};

export default JobDetailsBar;
