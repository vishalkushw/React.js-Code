import {Link,Outlet} from "react-router-dom";

const About=()=>{
    return(
      <>
       <h1>Hii it is About page</h1>
       <h1>Hii it is About page</h1>
       <h1>Hii it is About page</h1>
       <h1>Hii it is About page</h1>


        <table width="100%" border="1">
           <tr>
            <td>

            <Link to ="aboutproduct">AboutProduct</Link>
            <br />  <br />
            <Link to ="aboutcompany">Aboutcompany</Link>
            <br />  <br />
            <Link to ="aboutcontact">AboutContact</Link>
                 

            </td>


            <td>
              <Outlet/>
            </td>
           </tr>
        </table>

      </>
    )
  }
  export default About