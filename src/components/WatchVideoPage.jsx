import { useSearchParams } from "react-router-dom";

const WatchVideoPage = () => {
  const [params] = useSearchParams()
  const vidId = params.get('v')

  return (
    <div className="p-2">
      <iframe width="740"
        height="360"
        src={"https://www.youtube.com/embed/"+vidId+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchVideoPage;