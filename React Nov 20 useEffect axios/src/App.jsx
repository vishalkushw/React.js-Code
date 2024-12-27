import axios from "axios";
import { useState , useEffect} from "react";


const App=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res);
    });
  }
  
  const ans =mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })
 
    return(
        <>
       <h2>Display Axios Data</h2>
       <button onClick={loadData} style={{color:"white", backgroundColor:"blue"}}>Show data</button>
       <hr />
       <table border="1" bgcolor="skyblue" width="70%" >
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
       </table>
        </>
    )
  }
  export default App;