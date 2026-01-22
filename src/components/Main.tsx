import { SearchBar } from "./SearchBar"
import { WeatherContent } from "./WeatherContent"

export const Main = () => {
  return (
    <main className="w-full mt-6">
      <h1 className="text-center text-4xl font-semibold mb-10">How's the sky looking today?</h1>
      <SearchBar />
      <WeatherContent />
    </main>
  )
}