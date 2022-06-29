import { useState } from 'react'

import Main from './components/Main'

const App = () => {

  const [game, setGame] = useState(false)

  return (<>
    <div className="flex flex-col items-center justify-around h-screen w-full">
      <Main
        changeGameState={setGame}
      />
    </div>
  </>)
}

export default App