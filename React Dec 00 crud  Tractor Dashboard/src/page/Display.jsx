import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";


const Display=()=>{
    const [data, SetMyData]=useState([]);

    const getdata=()=>{
        let api="http://localhost:3000/Tractor";
        axios.get(api).then((res)=>{
            SetMyData(res.data);
        })
    }
useEffect(()=>{
    getdata();
},[])

const ans=data.map((item)=>{
    return(
        <tr>
            <td>{item.company}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
            <td>{item.price}</td>
        </tr>
    )
})
return(
    <>
    <div id="d">
    <div id="display">
    <Table border={2} width="100%">
  <thead>
    <tr style={{backgroundColor:"red", color:"white"}}>
      <th>Company Name</th>
      <th>Model</th>
      <th>Year</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody >
    {ans}
  </tbody>
</Table>
</div>
</div>
    </>
    )
}
export default Display;