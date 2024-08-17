import './index.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  //to access the audioRef, track-state  - in PlayerContext.jsx
  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
        <Player />
        {/* track.file gets the song file */}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App