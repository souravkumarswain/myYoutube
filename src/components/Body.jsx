import { Outlet } from "react-router-dom";
import MenuFull from "./MenuFull";

function Body() {
  return (
    <div className="flex pt-16 pl-25">
        <Outlet/>
        <MenuFull/>
    </div>
  )
}

export default Body