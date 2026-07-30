import { useEffect, useState } from 'react'
import { VIDEO_SUGGESTION_API } from '../utils/constants'

const useVidSuggestions = (vidId) => {
    const [videoSuggested,setVideoSuggested] = useState()
    useEffect(() => {
        const getSuggestedVideos = async() => {
            const data = await fetch(VIDEO_SUGGESTION_API);
            const json = await data.json();
            setVideoSuggested(json.items||null)
        }
        getSuggestedVideos()
    },[vidId])
  return videoSuggested;
}

export default useVidSuggestions