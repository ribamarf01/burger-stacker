import Bun from "./components/Bun"

const App = () => {
  return(<>
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Bun isUpperPart />
      <div className="py-2"></div>
      <Bun />
    </div>
  </>)
}

export default App