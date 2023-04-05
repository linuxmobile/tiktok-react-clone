import { useState } from 'react'
import UseAppRecommendation from './UseAppRecommendation.jsx'
import VideoPlayer from './VideoPlayer.jsx'

function App() {
  return (
    <div className="App">
      <main>
        <VideoPlayer />
        <UseAppRecommendation />
      </main>
    </div>
  )
}

export default App
