import {  YOUTUBE_LOGO } from '../utils/constants'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaUploadSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { showNavbar } from '../utils/navSlice';



function Header() {
  const dispatch = useDispatch()
  const onClickMenuFull = () => {
    dispatch(showNavbar())
  }
  return (
    <div className={`fixed top-0 left-0 right-0 w-full h-16 grid grid-flow-col p-2 items-center shadow-2xl bg-white z-50`}>
        <div className='col-span-2 flex items-center gap-4 px-4'>
            <button><RxHamburgerMenu onClick={onClickMenuFull} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer" size={40}/></button>
            <img className= "w-25" src={YOUTUBE_LOGO} alt="youtube_logo" />
        </div>
        <div className='col-span-8 flex justify-center items-center'>
            <input 
            className= "w-2/3 border border-gray-400 p-2 pl-4 rounded-l-full" 
            type="text" 
            placeholder='Search'/>
            <IoSearchOutline  className= "border border-gray-400 p-2 rounded-r-full mr-10 hover:bg-gray-200 cursor-pointer " size={41.5}/>
            <TiMicrophoneOutline className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 cursor-pointer" size={50}/>
        </div>
        <div className='col-span-2 flex justify-center items-center gap-4'>
          <LiaUploadSolid className = "hover:bg-gray-200 p-2 rounded-full cursor-pointer" size={40}/>
          <IoMdNotificationsOutline size={40} className='hover:bg-gray-200 p-2 cursor-pointer rounded-full'/>
          <CiUser className = "hover:bg-gray-200 p-2 rounded-full cursor-pointer" size={40}/>

        </div>
    </div>
  )
}

export default Header