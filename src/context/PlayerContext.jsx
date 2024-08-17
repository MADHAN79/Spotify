import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext =  createContext();


const PlayerContextProvider = ({children}) => {

    //this reference is for song player controls
    const audioRef = useRef();

    //this reference is for seek-bar controls | accessed in Player.jsx
    const seekBg = useRef();
    const seekBar = useRef();



//<------------ creating 3 state variable track, playStatus, time:

    //to manage the dynamic change in song thumbnail and its details at left-bottom of webpage:
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
        audioRef.current.play(); //current.play() is a method
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause(); //current.pause() is a method
        setPlayStatus(false);
    }

//===================================
    //dynamically changing the starting-time in player:
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                //this will increase the green color in seekBar dynamically
                //we are calculating the percentage of timepassed & assigning the %value to the seekBar's width 
                //since we get the % in number, at end we converting it to string by +
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%" ;//duration - endTime of the song.



                //this setTime will only change the startTime value.
                setTime({
                    currentTime:{
                        //we get the time in seconds, so we are % to get only the seconds if seconds value 
                        //get to like 61seconsds i.e: more than one minute.
                        second: Math.floor(audioRef.current.currentTime % 60), 
                        //to get minute from seconds we are using '/'
                        minute: Math.floor(audioRef.current.currentTime / 60) 
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60), //duration - endTime of the song.
                        minute: Math.floor(audioRef.current.duration / 60) 
                    }
                })
            }  //current.ontimeupdate() is a method

        }, 1000);
    },[audioRef])


//===================================


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