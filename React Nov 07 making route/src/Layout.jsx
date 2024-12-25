import {Link,Outlet} from "react-router-dom";

const Layout=()=>{
    return(
      <>
          <Link to ="home">Home</Link>|
          <Link to ="about">About</Link>|
          <Link to ="contact">Contact</Link>
          <hr size="8" color="red"/>

          <Outlet/>

          <hr size="8" color="red"/>

          www.myacompny.com 
      </>
    )
  }
  export default Layout