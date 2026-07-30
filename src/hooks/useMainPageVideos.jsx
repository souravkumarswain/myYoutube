import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'

function useMainPageVideos() {
    const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideoFromYoutube = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API)
      const json = await data.json()
      setVideos(json.items || [])
    }

    getVideoFromYoutube()
  }, [])
  return videos
}

export default useMainPageVideos