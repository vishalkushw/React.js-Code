import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{       //promis   resolove or reject it called promis
            setMydata(res.data)
            console.log(res.data);
        })

        
    }
    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display page</h1>
          <hr/>

          <table >
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
export default Display;