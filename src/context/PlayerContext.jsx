import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext =  createContext();


const PlayerContextProvider = ({children}) => {

    //this reference is for song player controls
    const audioRef = useRef();

    //this reference is for seek-bar controls | accessed in Player.jsx
    const seekBg = useRef();
    const seekBar = useRef();



//<------------ creating 3 state variable track, playStatus, time:

    //to manage the states:
    const [track, setTrack] = useState(songsData[0]);//initializing with songsData.

    //to manage the song is being played/paused:
    const [playStatus, setPlayStatus] = useState(false);//false so that @refreshing/@mounting webpage, its always be paused.

    //to change the values of start&end time:
    const [time, setTime] = useState({
        currentTime:{
            second:0, minute:0
        },
        totalTime:{
            second:0, minute:0
        }
    }) //initializing with one object & two properties.

// ----------------------------------->

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }



    //everything inside this object can be accessed globally
    const contextValue = {
        //creating one reference for the audio component mentioned in App.jsx
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
    }

  return (
    <PlayerContext.Provider value={contextValue}>
        {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;