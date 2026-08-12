export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

export const YOUTUBE_LOGO = 'https://www.gstatic.com/youtube/img/icons/mweb/youtube_fill/logo_with_text/v3/20px.svg';
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;
export const VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
export const VIDEO_SUGGESTION_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key="+YOUTUBE_API_KEY;
export const SEARCH_QUERY_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&q="