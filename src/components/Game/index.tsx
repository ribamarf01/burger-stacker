import { useState, useEffect } from 'react'

import Cheese from "../Cheese"
import Bun from "../Bun"
import Lettuce from '../Lettuce'
import Tomato from '../Tomato'
import Burger from "../Burger"

import MountedBurger from './MountedBurger'

interface TimerInfo {
  minutes: string,
  seconds: string
}

const STARTER_TIMER = 5
const STARTER_TIMER_INFO: TimerInfo = {
  minutes: "0",
  seconds: "00"
}

const Game = () => {

  const [timer, setTimer] = useState(STARTER_TIMER)
  const [timerInfo, setTimerInfo] = useState<TimerInfo>(STARTER_TIMER_INFO)

  const [game, setGame] = useState(true)
  const [points, setPoints] = useState(0)

  const [actualBurger, setActualBurger] = useState<JSX.Element[]>([])
  const [lastBurger, setLastBurger] = useState<JSX.Element[]>([])

  const pushBurgerComponent = (component: JSX.Element) => {
    setActualBurger([...actualBurger, component])
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {

      if (timer > 0) {
        const minutes = Math.floor(timer / 60)
        const seconds = timer % 60

        setTimerInfo({
          minutes: minutes.toString(),
          seconds: seconds < 10 ? "0" + seconds : seconds.toString()
        })

        setTimer(timer => timer - 1)
      } else {
        setGame(false)
        setTimerInfo(STARTER_TIMER_INFO)
        clearInterval(timerInterval)
      }

    }, 1000)

    return () => clearInterval(timerInterval)
  }, [timer])

  return (<>
    <div className="h-screen w-full flex flex-col items-center justify-between p-4">
      <header className="flex flex-col items-center font-common">
        <h1 className="text-3xl">Timer</h1>
        <span className="text-2xl">{`${timerInfo.minutes}:${timerInfo.seconds}`}</span>
        <h1 className='text-center text-3xl font-common my-4'>Points: {points}</h1>
      </header>

      <main className='flex flex-col w-full'>
        <div className='flex flex-row justify-around items-center w-full'>
          { lastBurger.length > 0 ? 
            (<div className='flex-1'>
              <h1 className='text-center text-3xl font-common'>Last Burguer</h1>
              <MountedBurger ingredients={lastBurger} /> 
            </div>)
            : 
            <h1 className='text-center text-3xl font-common flex-1'>You're mounting the first burger!</h1> 
          } {/* Last Burger or none */}

          <MountedBurger ingredients={actualBurger} /> {/* Burger that you're mounting */}
          
          <h1 className='text-center text-3xl font-common flex-1'>Next ingredient:</h1>
        </div>
      </main>

      <footer className='flex justify-around w-full'>
        <button onClick={() => pushBurgerComponent(actualBurger.length > 0 ? <Bun /> : <Bun isUpperPart />)} className='flex-1 border-black border-2 mx-6 py-4 text-white bg-bun'>Bun</button>
        <button onClick={() => pushBurgerComponent(<Lettuce />)} className='flex-1 border-black border-2 mx-6 py-4 text-white bg-lettuce'>Lettuce</button>
        <button onClick={() => pushBurgerComponent(<Burger />)} className='flex-1 border-black border-2 mx-6 py-4 text-white bg-burger'>Burger</button>
        <button onClick={() => pushBurgerComponent(<Cheese />)} className='flex-1 border-black border-2 mx-6 py-4 text-white bg-cheese'>Cheese</button>
        <button onClick={() => pushBurgerComponent(<Tomato />)} className='flex-1 border-black border-2 mx-6 py-4 text-white bg-tomato'>Tomato</button>
      </footer>
    </div>
  </>) 

}

export default Game