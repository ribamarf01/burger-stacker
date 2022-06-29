import Bun from "./components/Bun"
import Lettuce from './components/Lettuce'

const App = () => {
  return(<>
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Bun isUpperPart />
      <div className="py-2"></div>
      <Lettuce />
      <div className="py-2"></div>
      <Bun />
    </div>
  </>)
}

export default App