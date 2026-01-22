export const SearchBar = () => {
  return (
    <div className="w-full flex gap-4 items-center justify-center h-10">
      <div className="w-120 h-10 bg-[#25253f] rounded-md flex px-4">
        <img src="../assets/images/icon-search.svg" className="w-5" />
        <input 
        className="w-full h-full bg-transparent outline-none px-2 text-white"
        type="text" 
        placeholder="Search for a place..." />
      </div>
      <button className="w-fit h-full text-md px-4 bg-[#4455da] rounded-md cursor-pointer">Search</button>
    </div>
  )
}