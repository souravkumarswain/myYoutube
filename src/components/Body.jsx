import Menu from "./Menu";
import MenuFull from "./MenuFull";
import VideosContainer from "./VideosContainer";

function Body() {
  return (
    <div className="flex pt-16 pl-25">
        <Menu/>
        <VideosContainer/>
        <MenuFull/>
    </div>
  )
}

export default Body