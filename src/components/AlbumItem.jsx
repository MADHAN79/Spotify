import { useNavigate } from "react-router-dom"

//using props we'll get these from DisplayHome.jsx
const AlbumItem = ({image, name, desc, id}) => {

  //with useNavigate HOOK we redirect the user while clicking on each albums in DisplayHome.jsx
  const navigate = useNavigate();

  return (

    //calling navigate function for routing & provide the route inside the TEMPLATE LITERALS.
    <div onClick={() => navigate(`/album/${id}`)}  className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#38ff49a2]">
        <img className="rounded" src={image} alt='' />
        <p className="font-bold mt-2 mb-1">{name} </p>
        <p className="text-slate-200 text-sm">{desc} </p>
    </div>
  )
}

export default AlbumItem

//[#ffffff2b]