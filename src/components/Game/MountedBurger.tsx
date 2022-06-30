import { FC } from 'react'

interface BurgerProps {
  ingredients: JSX.Element[]
}

const MountedBurger: FC<BurgerProps> = ({ ingredients }) => {

  return (<div className='flex flex-col items-center flex-1'>
    { ingredients.map(ingredient => ingredient) }
  </div>)

}

export default MountedBurger