const Cheese = () => {

  return (<>
    <div className="h-8 w-80 bg-cheese rounded-t-3xl border-4 border-black relative">
      <div className="h-8 w-7 bg-cheese rounded-b-3xl rounded-t-lg border-4 border-black border-t-transparent absolute top-6 -left-1 z-10"></div>

      <div className="h-4 w-7 bg-cheese rounded-b-3xl border-4 border-black border-t-transparent absolute top-6 right-20 z-10"></div>
      <div className="h-10 w-8 bg-cheese rounded-b-3xl border-4 border-black border-t-transparent absolute top-6 right-24 z-10"></div>

      <div className="h-8 w-7 bg-cheese rounded-b-3xl rounded-t-lg border-4 border-black border-t-transparent absolute top-6 -right-1"></div>
    </div>
  </>)

}

export default Cheese
