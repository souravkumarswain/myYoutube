import { useDispatch, useSelector } from "react-redux";
import { TiHome, TiHomeOutline } from "react-icons/ti";
import { MdSubscriptions, MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import shortsIcon from "../assets";
import { SiYoutubeshorts } from "react-icons/si";
import { RiHistoryFill } from "react-icons/ri";
import { PiMusicNoteBold } from "react-icons/pi";
import { CgPlayList } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { VscDownload } from "react-icons/vsc";
import { ImNewspaper } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { FaGreaterThan } from "react-icons/fa";
import { PiApplePodcastsLogoBold } from "react-icons/pi";
import { MdOutlineCardMembership } from "react-icons/md";
import { showNavbar } from '../utils/navSlice';
import { homeButtonClicked, shortsButtonClicked, subscriptionButtonClicked, userButtonClicked } from "../utils/menuSlice";

function MenuFull() {
  const dispatch = useDispatch();
  const showNav = useSelector(store => store.nav.navState);
  const selectedMenu = useSelector(store => store.menu);
  const { home, shorts, subscription } = selectedMenu;

  const onClickHome = () => {
    dispatch(homeButtonClicked(true));
    dispatch(shortsButtonClicked(false));
    dispatch(subscriptionButtonClicked(false));
    dispatch(userButtonClicked(false));
    dispatch(showNavbar())
  };
  const onClickShorts = () => {
    dispatch(homeButtonClicked(false));
    dispatch(shortsButtonClicked(true));
    dispatch(subscriptionButtonClicked(false));
    dispatch(userButtonClicked(false));
    dispatch(showNavbar())
  };
  const onClickSubscription = () => {
    dispatch(homeButtonClicked(false));
    dispatch(shortsButtonClicked(false));
    dispatch(subscriptionButtonClicked(true));
    dispatch(userButtonClicked(false));
    dispatch(showNavbar())
  };

  const youOptions = [
    { icon: <RiHistoryFill size={30} />, name: "History" },
    { icon: <CgPlayList size={30} />, name: "Playlists" },
    { icon: <MdOutlineWatchLater size={30} />, name: "Watch later" },
    { icon: <BiLike size={30} />, name: "Liked Videos" },
    { icon: <VscDownload size={30} />, name: "Downloads" },
  ];

  const exploreOptions = [
    { icon: <PiMusicNoteBold size={30} />, name: "Music" },
    { icon: <BiMoviePlay size={30} />, name: "Movies" },
    { icon: <SiYoutubegaming size={30} />, name: "Gaming" },
    { icon: <ImNewspaper size={30} />, name: "News" },
    { icon: <GiTrophyCup size={30} />, name: "Sports" },
    { icon: <PiApplePodcastsLogoBold size={30} />, name: "Podcasts" },
    { icon: <MdOutlineCardMembership size={30} />, name: "Memberships" },
  ];

  return showNav ? (
    <div className='fixed inset-0 z-40 overflow-hidden'>
      <div onClick={() => dispatch(showNavbar())} className='absolute inset-0 bg-black/60'></div>
      <div className='fixed top-15 left-0 h-screen w-60 bg-white shadow-2xl z-50'>
        <div className='h-[calc(100vh-5rem)] overflow-y-auto px-3 pb-6'>
          <div className='mt-3 space-y-2'>
            <button onClick={onClickHome} className={`w-full flex items-center gap-4 rounded-xl px-3 py-3 ${home ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}>
              {home ? <TiHome size={30} /> : <TiHomeOutline size={30} />}
              <span className='font-medium text-sm'>Home</span>
            </button>
            <button onClick={onClickShorts} className={`w-full flex items-center gap-4 rounded-xl px-3 py-3 ${shorts ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}>
              {shorts? <SiYoutubeshorts size={24}/>:<img src={shortsIcon}/>}
              <span className='font-medium text-sm'>Shorts</span>
            </button>
            <button onClick={onClickSubscription} className={`w-full flex items-center gap-4 rounded-xl px-3 py-3 ${subscription ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}>
              {subscription ? <MdSubscriptions size={30} /> : <MdOutlineSubscriptions size={30} />}
              <span className='font-medium text-sm'>Subscriptions</span>
            </button>
          </div>
          <hr className='border-gray-300 opacity-50 my-4' />
          <div className='space-y-2'>
            <div className='flex items-center justify-between px-2'>
              <h2 className='font-medium'>You</h2>
              <FaGreaterThan size={12} />
            </div>
            {youOptions.map(option => (
              <button key={option.name} className='w-full flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-gray-100 text-left'>
                <div>{option.icon}</div>
                <span className='font-medium text-sm'>{option.name}</span>
              </button>
            ))}
          </div>
          <hr className='border-gray-300 opacity-50 my-4' />
          <div className='space-y-2'>
            <h2 className='px-2 font-medium'>Explore</h2>
            {exploreOptions.map(option => (
              <button key={`explore-${option.name}`} className='w-full flex items-center gap-4 rounded-xl px-3 py-3 hover:bg-gray-100 text-left'>
                <div>{option.icon}</div>
                <span className='font-medium text-sm'>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default MenuFull;
