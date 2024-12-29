import { message } from "antd";
import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const [input,setinput]=useState({});

const handle=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    

    setinput(values=>({
        ...values,[name]:value
    }));

    
}

const submit=(e)=>{
  let api="http://localhost:3000/Tractor";
  axios.post(api,input).then((res)=>{
      message.success("Data inserted")
  })

  input.value="";
}
    return(
        <>
        <div id="i">
        <div id="insert">
           Enter Company Name  <br />
           <input type="text" placeholder="john deere" name="company" onChange={handle}/> 
           <br />
           Enter Model  
           <br />
           <input type="text" placeholder="5310" name="model" onChange={handle}/> 
           <br />
           Enter Year
           <br />
           <input type="text"  placeholder="2024" name="year" onChange={handle}/> 
           <br />
           Enter Price 
           <br />
           <input type="text" placeholder="1000000" name="price" onChange={handle}/> 
           <br />
           
           <button onClick={submit}>Insert</button>
        </div>
        </div>
        </>
    )
}
export default Insert;