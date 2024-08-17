//in this component we'll display the home & albums

import { Route, Routes } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">

        {/* we are creating Routes for the HOME & ALBUMS page */}
        <Routes>
            {/* path="/" is LANDING PAGE,here it displays DisplayHome component*/}
            <Route path="/" element={<DisplayHome />}  />
            {/* routing based on each albums id |this id gets imported using useParams in DisplayAlbum.jsx*/}
            {/* here we are just mentioning how the url to be displayed */}
            <Route path="/album/:id" element={<DisplayAlbum />}  />
        </Routes>
    </div>
  )
}

export default Display