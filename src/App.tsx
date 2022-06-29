import { useState } from 'react'

import Main from './components/Main'

const App = () => {

  const [game, setGame] = useState(false)

  return (<>
    <div className="grid place-items-center h-screen w-full">
      { game ?
        'init'
        :
        <Main
          changeGameState={setGame}
        />
      }
    </div>
  </>)
}

export default App