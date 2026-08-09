import { useSearchParams } from "react-router-dom";
import useVideoDetailsbyId from "../hooks/useVideoDetailsbyId";
import { GrChannel } from "react-icons/gr";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import useVidSuggestions from "../hooks/useVidSuggestions";
import SuggestedVidCard from "./SuggestedVidCard";
import { useState } from "react";


const WatchVideoPage = () => {
  const [showDescription,setShowDescription] = useState(false)
  const [params] = useSearchParams()
  const vidId = params.get('v')

  const vidDetails = useVideoDetailsbyId(vidId)
  const vidSuggestions = useVidSuggestions(vidId)
  const { title, description, channelTitle } = vidDetails?.snippet || {}

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