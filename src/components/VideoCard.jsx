function VideoCard({ info }) {
  console.log(info)
  const {channelTitle,thumbnails,title} = info.snippet
  const{viewCount} = info.statistics
  if (!info) {
    return <div>Loading video...</div>
  }

  return (
    <div className="rounded-2xl bg-white shadow-sm hover:cursor-pointer">
      <img className="w-90 rounded-2xl" src={thumbnails.medium.url} alt="poster" />
      <ul className="w-80 p-2">
        <li className="font-bold">{title}</li>
        <li className="text-sm font-semibold text-gray-400">{channelTitle}</li>
        <li className="text-sm font-semibold text-gray-400">{viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard