//this is the "GOD FILE :)" for all logic behind the player functionalities.

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

// <---------------------------------->
    const play = () => {
        audioRef.current.play(); //current.play() is a method
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause(); //current.pause() is a method
        setPlayStatus(false);
    }

// ----------------------------------->

// <----------------------------------
    //playing with song id:
    const playWithId = async (id) => {
        await setTrack(songsData[id]);//track will get set in the track state.
        await audioRef.current.play();//now automatically the song assigned in the track should play.
        setPlayStatus(true) //also ensuring the playStatus set to true.
    }

// ----------------------------------->

// <----------------------------------
    //implementing prev & forward track button:
    const previous = async () => {
        //prevents the track not being changed to "-1/last song in the list".
        if(track.id>0) {
            await setTrack(songsData[track.id-1]);//whenever the track changed the play will by default as we set gets paused.
            await audioRef.current.play();//hence we are setting the track to play.
            setPlayStatus(true); //also ensuring the playStatus set to true.
        }
    }

    const next = async () => {
        //prevents the track not being changed to "0/first song in the list".
        if(track.id < songsData.length-1) {
            await setTrack(songsData[track.id+1]);//whenever the track changed the play will by default as we set gets paused.
            await audioRef.current.play();//hence we are setting the track to play.
            setPlayStatus(true); //also ensuring the playStatus set to true.
        }
    }

// ----------------------------------->

// <----------------------------------
    //implementing seek-bar dragging logic:
    //passing event(onClick) in async func.
    const seekSong = async (e) => {
        //console.log(e); - with this we can use nativeElement > offsetX 's value to seek through the song.
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration) //(offsetX/offsetWidth)returns in %
    }

// ----------------------------------->    

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
        audioRef, //creating one reference for the audio component mentioned in App.jsx
        seekBar, //accessing all the below contexts, in Player.jsx
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong 
    }

  return (
    <PlayerContext.Provider value={contextValue}>
        {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;