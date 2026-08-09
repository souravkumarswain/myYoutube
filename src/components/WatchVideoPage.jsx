import { useSearchParams } from "react-router-dom";
import useVideoDetailsbyId from "../hooks/useVideoDetailsbyId";
import { GrChannel } from "react-icons/gr";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import useVidSuggestions from "../hooks/useVidSuggestions";
import SuggestedVidCard from "./SuggestedVidCard";
import { useState } from "react";
import LiveComment from "./LiveComment";
import { LuSendHorizontal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addUserComment } from "../utils/commentSlice";


const WatchVideoPage = () => {
  const[userComment,setUserComment] = useState()
  const dispatch = useDispatch()
  const [showDescription,setShowDescription] = useState(false)
  const [params] = useSearchParams()
  const vidId = params.get('v')

  const vidDetails = useVideoDetailsbyId(vidId)
  const vidSuggestions = useVidSuggestions(vidId)
  const { title, description, channelTitle } = vidDetails?.snippet || {}
 
  const onClickPostComment = (e) => {
    e.preventDefault();
    dispatch(addUserComment(
      {
        author:"Sourav Swain",
        quote:userComment
      }
    ))
    setUserComment("")
  }

  return (
    <div className="grid grid-flow-col">
    <div className="p-2 col-span-4">
      <iframe width="760"
        height="400"
        src={"https://www.youtube.com/embed/" + vidId + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      <h1 className="text-2xl font-bold w-3xl py-2">{title}</h1>
      <div className="flex items-center justify-between w-12/12">
        <span className="flex gap-3 items-center w-1/4">
          <GrChannel size={25}/>
          {channelTitle}
        </span>
        <button className="bg-black text-white rounded-full px-3 py-2 mx-2 font-semibold hover:cursor-pointer">Subscribe</button>
        <div className="flex items-center justify-between w-20 p-2 bg-gray-100 rounded-2xl hover:bg-gray-200 cursor-pointer">
          <SlLike size={25}/>
          <SlDislike size={25}/>
        </div>
        <PiShareFat className="ml-6 p-2 bg-gray-100 rounded-2xl hover:bg-gray-200 cursor-pointer" size={40}/>
      </div>
      <div className="p-3 my-3 bg-gray-100 rounded-xl w-3xl">
        <h1 className="whitespace-pre-line text-base leading-loose font-semibold">
          {
            showDescription ? description : description?.slice(0,300)
          }
          <button onClick={() => setShowDescription(!showDescription)}className="text-blue-400 ml-2">{showDescription ? " ...Less" : " ...More"}</button>
          </h1>
      </div>
      <div className="w-[760] bg-slate-200 p-2 rounded-lg">
        <LiveComment/>
        <form onSubmit={onClickPostComment}className="flex justify-between items-center px-4 mt-2">
          <input onSubmit = {(e) => setUserComment(e.target.value)} value={userComment} onChange={(e) => setUserComment(e.target.value)} className="w-full border-black border-solid rounded-xl p-2 mr-2 border-2" type="text" placeholder="Type your thought"/>
          <LuSendHorizontal onClick={onClickPostComment} size={30} className="hover:cursor-pointer"/>
        </form>
      </div>
    </div>
    <div className="col-span-6">
      {
        vidSuggestions?.map(eachVideo => <SuggestedVidCard key ={eachVideo.id} vid = {eachVideo}/>)
      }
    </div>
  </div>
  )
}

export default WatchVideoPage;