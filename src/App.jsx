// css
import './assets/styles/App.css'

// react hooks
import { useCallback, useEffect, useState } from 'react'

// data
import { wordList } from './assets/data/words'

// componentes
import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game'
import End from './components/End/End'

const estagios = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameEstagio, setGameEstagio] = useState(estagios[0].name)

  return (
    <div className="App">
      {gameEstagio === 'start' && <StartScreen/>}
      {gameEstagio === 'game' && <Game/>}
      {gameEstagio === 'end' && <End/>}
    </div>
  )
}

export default App
