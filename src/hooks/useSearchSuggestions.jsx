import { useEffect } from 'react'
import { SEARCH_QUERY_API, YOUTUBE_API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { showSearchSuggestions } from '../utils/searchSuggestionsSlice';

const useSearchSuggestions = (searchQuery) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => fetchSearchSuggestions(), 200)
        return () => {
          clearTimeout(timer)
        }
      },[searchQuery])
      const fetchSearchSuggestions = async() => {
          const data = await fetch(SEARCH_QUERY_API+searchQuery+"&key="+YOUTUBE_API_KEY)
          const json = await data.json();
          dispatch(showSearchSuggestions(json.items?json.items:null))
        }
}

export default useSearchSuggestions