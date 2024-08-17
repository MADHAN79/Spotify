//in this component we'll display the home & albums

import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"

const Display = () => {

  // for the below display file's div, we are creating a reference
  const displayRef = useRef();

  //now we are trying to get the part of url which is: /album/id_of_each_album
  const location = useLocation();
  //console.log(location) - in console we can see the part url is mentioned as 'pathname' in object.
  //in consolte - pathname: "/album/1" for first album details page.
  const isAlbum = location.pathname.includes("album"); //checking if the pathname contains the word 'album'.
  //console.log(isAlbum) - we'll get true, if we are inside any of the albums page.

  
  //since only if we are inside an album page we can get the location/url, hence we are implementing that isAlbum logic to check actually are we inside.
  //to store the album id in one variable
  const albumId = isAlbum ? location.pathname.slice(-1) : ''; //with slice(-1) we can extract only the last number/letter from that string.
  //since the pathname format is /album/1 , we'll get albumId as 1 for first album.

  //with this albumId only we will match the bgColor in albumsData object in assets.jsx file for each albums page.

  //getting the bgColor: | converting the string format albumId to number format
  const bgColor = albumsData[Number(albumId)].bgColor;

  //since no values in dependency array this property will get implemented at the mounting/starting of this page itself.
  //if we are not mentioning any variables in dependency array, its good to remove that.
  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }
    else{
      displayRef.current.style.background = `#121212` ;
    }
  })

  return (
    //with the help of this useRef only we are adding the bg color for each individual album page.
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">

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