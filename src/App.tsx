import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className='max-w-700 bg-[#03012d] '>
      <div className='w-dvw min-h-dvh bg-[#03012d] text-white px-48'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
