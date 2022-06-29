import Cheese from "./components/Cheese"
import Bun from "./components/Bun"
import Lettuce from './components/Lettuce'
import Tomato from './components/Tomato'
import Burger from "./components/Burger"

const App = () => {

  const items = [
    <Bun isUpperPart />,
    <Lettuce />,
    <Tomato />,
    <Cheese />,
    <Burger />,
    <Bun />
  ]

  return (<>
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {items.map(item => item)}
    </div>
  </>)
}

export default App