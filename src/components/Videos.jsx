
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import useMainPageVideos from "../hooks/useMainPageVideos";

function Videos() {
  const videos = useMainPageVideos()

  return (
    <div className="pt-17 flex gap-3 overflow-auto flex-wrap">
      {
        videos.length > 0 ? videos.map((eachVideo) => (
          <Link key={eachVideo.id} to={'/watch?v='+eachVideo.id}>
            <VideoCard  info={eachVideo} />
          </Link>
          
        )) : <div>Loading...</div>
      }
    </div>
  )
}

export default Videos