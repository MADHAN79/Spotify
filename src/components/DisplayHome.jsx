import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from './AlbumItem'
import SongItem from "./SongItem"

const DisplayHome = () => {
  return (
    <>
     {/* Here we have mounted this Navbar component inside this DisplayHome component */}
     <Navbar />
     
     <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        
        {/* overflow-auto will display a horzontal bar if the screen size got reduced & this applied only for this div and not for the whole website :) | but we can still use the horizontal slider by hiding this scroll bar*/}
        {/* see that magic sliding effect in index.css */}
        <div className="flex overflow-auto">
            {/* passing each item & its index | this will loop through all items in albumsData array in in assets.js in assets folder*/}
            {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
     </div>

     <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        
        {/* overflow-auto will display a horzontal bar if the screen size got reduced & this applied only for this div and not for the whole website :) | but we can still use the horizontal slider by hiding this scroll bar*/}
        {/* see that magic sliding effect in index.css */}
        <div className="flex overflow-auto">
            {/* passing each item & its index | this will loop through all items in songsData array in in assets.js in assets folder*/}
            {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
     </div>

    </>
  )
}

export default DisplayHome