import { SearchBar } from "./SearchBar"

export const Main = () => {
  return (
    <main className="w-full mt-12">
      <h1 className="text-center text-4xl font-semibold mb-16">How's the sky looking today?</h1>
      <SearchBar />
    </main>
  )
}