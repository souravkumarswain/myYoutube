import { SiYoutubeshorts } from "react-icons/si";
import { TiHomeOutline } from "react-icons/ti";
import { MdSubscriptions } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import shortsIcon from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { homeButtonClicked, shortsButtonClicked, subscriptionButtonClicked, userButtonClicked } from "../utils/menuSlice";

function Menu() {
    const dispatch = useDispatch()
    const selectedMenu = useSelector(store => store.menu)
    const{home,shorts,subscription,user} = selectedMenu
    
    const onClickHome = () => {
        dispatch(homeButtonClicked(true));
        dispatch(shortsButtonClicked(false));
        dispatch(subscriptionButtonClicked(false));
        dispatch(userButtonClicked(false));
    }
    const onClickShorts = () => {
        dispatch(homeButtonClicked(false));
        dispatch(shortsButtonClicked(true));
        dispatch(subscriptionButtonClicked(false));
        dispatch(userButtonClicked(false));
    }
    const onClickSubscription = () => {
        dispatch(homeButtonClicked(false));
        dispatch(shortsButtonClicked(false));
        dispatch(subscriptionButtonClicked(true));
        dispatch(userButtonClicked(false));
    }
    const onClickUser = () => {
        dispatch(homeButtonClicked(false));
        dispatch(shortsButtonClicked(false));
        dispatch(subscriptionButtonClicked(false));
        dispatch(userButtonClicked(true));
    }
    return (
        <div className="mt-1 ml-1 mr-1">
            <span onClick={onClickHome} className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
                {home?<TiHome size={30} />:<TiHomeOutline size={30}/>}
                <h1 className="text-xs">Home</h1>
            </span>
            <span onClick={onClickShorts} className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
                {shorts? <SiYoutubeshorts size={30}/>:<img src={shortsIcon} />}
                <h1 className="text-xs">Shorts</h1>
            </span>
            <span onClick={onClickSubscription} className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
                {subscription?<MdSubscriptions size={30}/>:<MdOutlineSubscriptions size={30} />}
                <h1 className="text-xs">Subscriptions</h1>
            </span>
            <span onClick={onClickUser} className="mb-4 flex flex-col items-center py-4 px-1 rounded-xl hover:bg-gray-100 cursor-pointer">
                {user?<FaUserCircle size={30}/>:<FaRegUserCircle size={30} />}
                <h1 className="text-xs">You</h1>
            </span>

        </div>
    )
}

export default Menu