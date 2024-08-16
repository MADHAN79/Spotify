import {assets, songsData} from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
        
        {/* hidden - sidebar gets hided in small screen | lg- for large screen*/}
        <div className='hidden lg:flex items-center gap-4'>
            {/* importing the first song's thumbnail image from songsData ARRAY */}
            <img className='w-12' src={songsData[0].image} alt='' />
            <div>
                <p>{songsData[0].name}</p>
                {/* slice - to reduce the displayed content size of description */}
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div> 
        {/*====div1====*/}

        {/* this div is for middle player controls */}
        <div className='flex flex-col items-center gap-1 m-auto'>
            
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''  />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=''  />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt=''  />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt=''  />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''  />
            </div>

            {/* this div includes: just starting time, seek-bar & end time */}
            <div className='flex items-center gap-5'>
                <p>1:05</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    {/* as the song play time increases the "w-0 green" wil get updated accordingly eg:w-10 so it looks like seek bar ! */}
                    {/* that seek-bar logic will be in context folder */}
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:09</p>
            </div>
        </div>
        {/*====div2====*/}

        {/* this entire div is not going to be functional its just for aesthetics */}
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            {/* play & plays two different icons */}
            <img className='w-4' src={assets.plays_icon} alt='' />
            <img className='w-4' src={assets.mic_icon} alt='' />
            <img className='w-4' src={assets.queue_icon} alt='' />
            <img className='w-4' src={assets.speaker_icon} alt='' />
            <img className='w-4' src={assets.volume_icon} alt='' />
            
            {/* volume-bar div */}
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            
            <img className='w-4' src={assets.mini_player_icon} alt='' />
            <img className='w-4' src={assets.zoom_icon} alt='' />
        </div>
        {/*====div3====*/}
    </div>
  )
}

export default Player