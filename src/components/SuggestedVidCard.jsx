
const SuggestedVidCard = ({ vid }) => {
    const thumbNail = vid?.snippet?.thumbnails?.medium?.url
    const title = vid?.snippet?.title
    const channelTitle = vid?.snippet?.channelTitle
    const viewCount = vid?.statistics?.viewCount
  return (
    <div className='flex p-2 m-2 bg-gray-100 rounded-2xl gap-3 hover:cursor-pointer'>
        <img className="rounded w-65 h-30" src={thumbNail} alt="vidImg" />
        <div className="text-sm flex flex-col gap-1">
            <span className="font-semibold">{title.length > 50 ? title.slice(0,50)+" ...":title}</span>
            <span className="text-xs text-gray-400">{channelTitle}</span>
            <span className="text-xs text-gray-400">{viewCount} views</span>
        </div>
    </div>
  )
}

export default SuggestedVidCard