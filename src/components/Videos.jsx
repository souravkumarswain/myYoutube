import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import VideoCard from "./VideoCard"

function Videos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideoFromYoutube = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API)
      const json = await data.json()
      setVideos(json.items || [])
    }

    getVideoFromYoutube()
  }, [])

  return (
    <div className="pt-17 flex gap-3 overflow-auto flex-wrap">
      {
        videos.length > 0 ? videos.map((eachVideo) => (
          <VideoCard key={eachVideo.id} info={eachVideo} />
        )) : <div>Loading...</div>
      }
    </div>
  )
}

export default Videos