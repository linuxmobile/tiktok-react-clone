import { useState, useEffect } from 'react'
import tiktokLogo from '../assets/tiktok.png'

function useAppRecommendationModal() {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const isModalClosed = localStorage.getItem('isModalClosed')
    if (isModalClosed) {
      setShowModal(false)
    }
  }, [])

  const handleAppModal = () => {
    setShowModal(false)
    localStorage.setItem('isModalClosed', true)
  }

  if (showModal) {
	return (
		<div className='relative w-full h-full'>
			<div className='bg-white absolute bottom-0 rounded-t-lg w-full px-5 py-4 pt-10'>
				<div className='flex flex-col items-center gap-2'>
					<div className='absolute -top-6'>
						<img
							src={tiktokLogo}
							alt=''
							className='rounded-full w-14 p-1 bg-white'
						/>
					</div>
					<h3 className='text-lg font-semibold'>Get the full app experience</h3>
					<p className='text-sm text-opacity-70 text-black'>
						Enjoy more videos and great features on the app.
					</p>
					<div className='flex flex-col w-full items-center text-center gap-2'>
						<a href='' className='bg-red-500 w-full py-2 text-white'>
							Open TikTok
						</a>
						<button className='bg-white py-2' onClick={handleAppModal} > 
							Not now
						</button>
					</div>
				</div>
			</div>
		</div>
	)} else {
    return null
  }
}

export default useAppRecommendationModal
