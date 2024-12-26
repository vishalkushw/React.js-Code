// import student from "./StuData";
  
// const ans=student.map((key)=>{
//   return(
//       <>
//          <tr>
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fees}</td>
//          </tr>
      
//       </>

//   )
// })

// const App=()=>{
//   return(
//     <>
//      <h1>welcome to cybrom</h1>

//       <table border="1px"> 
//         <tr>
//           <td>Rollno</td>
//           <td>Name</td>
//           <td>City</td>
//           <td>fees</td>
//         </tr>
//         {ans}
//       </table>

//     </>
//   )
// }
// export default App


// import Empdata from "./EmpData"
// import EmpDesign from "./EmpDesign";

// const ans = Empdata.map((key)=> <EmpDesign 
// empno={key.empno}
// name={key.name}
// designation={key.designation}
// salary={key.salary}
// />

// );

// const App=()=>{
//   return(
//     <>
//      <h1>welcome to cybrom</h1>

//        <div>
//        {ans}
//        </div>
       
      
//     </>
//   )
// }
// export default App

import Empdata from "./EmpData";
import EmpDesign from "./EmpDesign";
import "./style.css"

const App = () => {
  const ans = Empdata.map((key) => (
    <EmpDesign 
      empno={key.empno} 
      name={key.name} 
      designation={key.designation} 
      salary={key.salary} 
    />
  ));

  return (
    <>
      <h1 id="demo">Welcome to Cybrom</h1>
      <div id='data'>
        {ans}
      </div>
    </>
  );
};

export default App;