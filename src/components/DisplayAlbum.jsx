//this component is used to display the each Albums Data while routing from DisplayHome.jsx

import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";


const DisplayAlbum = () => {

    //we are getting the id of each album displayed in browser by using useParams, 
    //which is mentioned in Display.jsx | with the id we got, we'll map the respective albumData to be displayed.
    const {id} = useParams();
    //mapping each value in albumsData in albumData, using this data we'll display each album's data in each page.
    const albumData = albumsData[id];

    //enabling the click to play the song func
    const {playWithId} = useContext(PlayerContext)

  return (
    <>
     {/* while entering this DisplayAlbum page after clicking on any album in Home page this mounts the Navabar. */}
     <Navbar />
     <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} />
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className="mt-1">
                <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                <b>&nbsp; Spotify </b>
                • 137,215,403 likes 
                • <b>50songs, </b>
                about 2 hour 30 minutes
            </p>
        </div>
     </div>
     
     <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        {/* hidden in small screens */}
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
     </div>

     <hr />
     {
      songsData.map((item, index) =>(
        <div onClick={() => {playWithId(item.id)}} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#38ff4967] cursor-pointer rounded-[10px]">
          <p className="text-white">
            {/* since our dataset index starts from 0 we are giving +1 */}
            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="tex-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">9 days ago</p>
          <p className="tex-[15px] text-center">{item.duration}</p>
        </div>
      ))
     }


    </>
  )
}

export default DisplayAlbum