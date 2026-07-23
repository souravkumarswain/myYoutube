import { SiYoutubeshorts } from "react-icons/si";
import { TiHome } from "react-icons/ti";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import shortsIcon from "../assets";

function Menu() {
  return (
    <div className="mt-1 ml-1 mr-1">
        <span className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
            <TiHome size={30}/>
            <h1 className="text-xs">Home</h1>
        </span>
        <span className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src = {shortsIcon}/>
            <h1 className="text-xs">Shorts</h1>
        </span>
        <span className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
            <MdOutlineSubscriptions size={30}/>
            <h1 className="text-xs">Subscriptions</h1>
        </span>
        <span className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
            <FaRegUserCircle size={30}/>
            <h1 className="text-xs">You</h1>
        </span>
        
    </div>
  )
}

export default Menu