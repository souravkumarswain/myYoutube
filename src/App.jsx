import { createBrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import { RouterProvider } from "react-router"
import Menu from "./components/Menu"
import VideosContainer from "./components/VideosContainer"
import WatchVideoPage from "./components/WatchVideoPage"

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<><Menu/><VideosContainer/></>
        },
        {
          path:'watch',
          element:<WatchVideoPage/>
        }
      ]
    }
  ])

  return (
    <>
      <Header/>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
