import { useState, useRef, useEffect } from 'react'
import TiktokVideo from '../assets/videos/tiktok1.mp4'
import PauseIcon from '../assets/pause.png'

function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }
	return (
		<div className='relative'>
      <video
        src={TiktokVideo}
        ref={video}
        controls={false}
        className='w-[353px]'
      >
      </video>
      <div className='w-full h-full'>
        <button onClick={handlePlay} className='w-12 h-12 absolute top-72 left-36'><img src={PauseIcon} alt="pause image" /></button>
      </div>
		</div>
	)
}

export default VideoPlayer
