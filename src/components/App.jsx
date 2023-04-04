import { useState } from 'react'
import UseAppRecommendation from './UseAppRecommendation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <UseAppRecommendation />
    </div>
  )
}

export default App
