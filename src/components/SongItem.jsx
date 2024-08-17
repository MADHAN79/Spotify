import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

//using props we'll get these from DisplayHome.jsx
const SongItem = ({name, image, desc, id}) => {

  const {playWithId} = useContext(PlayerContext)


  return (
    //if we directly pass playWithId func. it will immediately get executed,hence we are passing it as an empty arrow func.
    <div onClick={() =>playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#38ff49a2]">
        <img className="rounded" src={image} alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default SongItem