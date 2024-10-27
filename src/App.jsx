import './App.css'
import { Board } from './components/Board'
import { Header } from './components/Header'
import { Keyboard } from './components/Keyboard'
import { Plays } from './components/Plays'
import { ConfigurationProvider } from './contexts/configuration'
import { NumberPlayProvider } from './contexts/numberPlay'
import { GameProvider } from './contexts/game'
import { StatisticsProvider } from './contexts/statistics'

function App() {

  return (
    <>
      <main className='flex flex-col align-middle justify-between h-screen max-w-xl mx-auto text-black dark:text-slate-100'>
        <ConfigurationProvider>
          <NumberPlayProvider>
            <StatisticsProvider>
              <GameProvider>
                <Header></Header>
                <Plays></Plays>
                <Board></Board>
                <Keyboard></Keyboard>
              </GameProvider>
            </StatisticsProvider>
          </NumberPlayProvider>
        </ConfigurationProvider>
      </main>
    </>
  )
}

export default App
