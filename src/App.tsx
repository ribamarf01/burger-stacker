import { useState } from 'react'

import Main from './components/Main'
import Game from './components/Game'

const App = () => {

  const [game, setGame] = useState(false)

  return (<>
    <div className="grid place-items-center h-screen w-full">
      { game ?
        <Game />
        :
        <Main
          changeGameState={setGame}
        />
      }
    </div>
  </>)
}

export default App