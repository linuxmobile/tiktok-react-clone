import { useState, useRef, useEffect } from 'react'
import TiktokVideo from '../assets/videos/tiktok1.mp4'

function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const btn = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
      btn.current.classList.remove('opacity-0')
    } else {
      video.current.play()
      btn.current.classList.add('opacity-0')
    }
    setPlaying(!playing)
  }
	return (
		<div className='relative'>
      <video
        src={TiktokVideo}
        ref={video}
        controls={false}
        className='w-full h-full'
        onClick={handlePlay}
      >
      </video>
        <button ref={btn} onClick={handlePlay} className='absolute bg-[url(pause.png)] z-10 inset-0 m-auto w-16 h-16 bg-contain bg-no-repeat transition-all ease-in-out duration-300'></button>
		</div>
	)
}

export default VideoPlayer
