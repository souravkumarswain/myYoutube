import { useEffect } from 'react'
import { SEARCH_QUERY_API, YOUTUBE_API_KEY } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchKey, showSearchSuggestions } from '../utils/searchSuggestionsSlice';

const useSearchSuggestions = (searchQuery) => {
  const suggestedData = useSelector(store => store.search.showSuggestions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addSearchKey(searchQuery));
    const timer = setTimeout(() => {
      if (!suggestedData[searchQuery]) {
        fetchSearchSuggestions()
      }
    }
      , 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
  const fetchSearchSuggestions = async () => {
    const data = await fetch(SEARCH_QUERY_API + searchQuery + "&key=" + YOUTUBE_API_KEY)
    const json = await data.json();
    let suggetions = {
      [searchQuery]: json.items
    }
    dispatch(showSearchSuggestions(json.items ? suggetions : null))
  }
}

export default useSearchSuggestions