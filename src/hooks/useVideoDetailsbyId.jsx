import { useEffect, useState } from 'react'
import { VIDEO_DETAILS_API, YOUTUBE_API_KEY } from '../utils/constants';

const useVideoDetailsbyId = (vidId) => {
    const [vidDeatils,setVidDetails] = useState();
    useEffect(() => {
    const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API+vidId+"&key="+YOUTUBE_API_KEY);
    const json = await data.json();
    setVidDetails(json.items[0] || null)
  }
    getVideoDetails()
  },[vidId])
  return vidDeatils
}

export default useVideoDetailsbyId