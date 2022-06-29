import { FC } from 'react'

import Cheese from "../Cheese"
import Bun from "../Bun"
import Lettuce from '../Lettuce'
import Tomato from '../Tomato'
import Burger from "../Burger"

interface MainProps {
  changeGameState: Function
}

const Main: FC<MainProps> = ({ changeGameState }) => {

  const items = [
    <Bun isUpperPart />,
    <Lettuce />,
    <Tomato />,
    <Cheese />,
    <Burger />,
    <Bun />
  ]

  const initGame = () => {
    changeGameState(true)
  }

  return (<>
    <div className='flex relative'>
      <div className='flex flex-col items-center opacity-50 blur-sm'>
        {items.map(item => item)}
      </div>
      <div className='absolute flex flex-col min-h-full items-center justify-center'>
        <div className='relative w-full'>
          <h1 className='text-purple-neon text-7xl text-center font-extrabold absolute -inset-1 font-title w-full blur'>Burger Stacker</h1>
          <h1 className='text-pink-neon text-7xl text-center font-extrabold font-title w-full'>Burger Stacker</h1>
        </div>
        <button
          onClick={() => initGame()}
          className='text-xl text-purple-neon text-extrabold border-purple-neon border-2 py-1 px-4 rounded-full hover:text-white hover:bg-purple-neon duration-300 transition-all'
        >
          Play
        </button>
      </div>
      
    </div>
  </>)

}

export default Main