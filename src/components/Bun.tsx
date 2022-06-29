import { FC } from 'react'

interface BunProps {
  isUpperPart?: boolean
}

const Bun: FC<BunProps> = ({ isUpperPart }) => {
  
  return(<>
    { isUpperPart ?
      <div className="h-28 w-72 bg-bun rounded-t-full relative border-4 border-black">
        <div className='bg-white h-4 w-2 absolute top-8 left-20 rounded-full -rotate-12'></div>
        <div className='bg-white h-4 w-2 absolute top-8 left-28 rounded-full -rotate-6'></div>
        <div className='bg-white h-4 w-2 absolute top-8 right-20 rounded-full rotate-12'></div>
        <div className='bg-white h-4 w-2 absolute top-8 right-28 rounded-full rotate-6'></div>
      </div> 
      :
      <div className="h-16 w-72 bg-bun rounded-b-xl border-4 border-black"></div>
    }
  </>)

}

export default Bun