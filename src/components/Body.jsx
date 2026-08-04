import { Outlet } from "react-router-dom";
import MenuFull from "./MenuFull";
import { useSelector } from "react-redux";

function Body() {
  const searchKey = useSelector(store => store.search.searchKey)
  const dataSearchSuggestions = useSelector((store) => store.search.showSuggestions[searchKey])
  const showSearchSuggestionBox = useSelector((store) => store.search.showSuggestionBox)
  return (
    <div className="flex pt-16 pl-25">
      <Outlet />
      <MenuFull />
      {
       searchKey != "" && dataSearchSuggestions && showSearchSuggestionBox &&
        <div className="fixed pb-6 left-88 bg-white w-119 -mt-2 z-50 p-3 shadow-2xl rounded-2xl overflow-y-scroll scrollbar-none h-96">
          <ul>
            {
              dataSearchSuggestions.map(eachSuggestion =>
                <li className="p-1 items-center hover:bg-gray-100 cursor-pointer rounded-2xl"
                  key={eachSuggestion.id.videoId}>
                  🔎 {eachSuggestion.snippet.title}
                </li>
              )
            }
          </ul>
        </div>
      }

    </div>
  )
}

export default Body