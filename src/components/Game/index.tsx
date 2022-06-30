import { useState, useEffect } from 'react'

import Cheese from "../Cheese"
import Bun from "../Bun"
import Lettuce from '../Lettuce'
import Tomato from '../Tomato'
import Burger from "../Burger"

import MountedBurger from '../MountedBurger'

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

  const items = [
    <Bun isUpperPart />,
    <Lettuce />,
    <Tomato />,
    <Cheese />,
    <Burger />,
    <Bun />
  ]

  return (<>
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <header className="flex flex-col items-center font-common">
        <h1 className="text-3xl">Timer</h1>
        <span className="text-2xl">{`${timerInfo.minutes}:${timerInfo.seconds}`}</span>
      </header>

      <main className='flex flex-col w-full'>
        <h1 className='text-center text-3xl font-common my-4'>Points: {points}</h1>
        <div className='flex flex-row justify-around w-full'>
          <MountedBurger ingredients={items} />
        </div>
      </main>

      <footer>pesinho</footer>
    </div>
  </>)

}

export default Game