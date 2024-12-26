
const EmpDesign = (props) => {
  return (
    < >
     <div id="emp"> 
      <h1>Employee Number : {props.empno}</h1>
      <h2>Employee Name : {props.name}</h2>
      <h2>Designation : {props.designation}</h2>
      <h2>Employee Salary : {props.salary}</h2>
      </div>
    </>
  )
};

export default EmpDesign;