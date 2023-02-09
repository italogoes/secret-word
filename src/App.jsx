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
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

function App() {
  const [gameEstagio, setGameEstagio] = useState(estagios[0].name)
  const [words] = useState(wordList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndPickCategory = () => {
    // pegando uma categoria aleatoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pegando as palavras aleatorias
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(category)
    console.log(word)

    return { word, category }
  }

  // Função para iniciar o jogo
  const startGame = () => {
    // pegar palavra e categoria
    const { word, category } = pickWordAndPickCategory()

    // criar um array com as letras da palavra escolhida
    let wordLetters = word.split('')

    // converter todoas as letras do array para minusculas
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)
    console.log(word, category)

    // setar os estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


    setGameEstagio(estagios[1].name)
  }

  // Processar a letra digitada
  const verificarLetra = (letter) => {
    console.log(letter)
  }

  // Reiniciar o jogo quando terminar ou seja, resetar todos os states
  const reiniciar = () => {
    setGameEstagio(estagios[0].name)
  }

  return (
    <div className="App">
      {gameEstagio === 'start' && <StartScreen startGame={startGame} />}
      {gameEstagio === 'game' && 
        <Game 
          verificarLetra={verificarLetra} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          wrongLetters={wrongLetters}
          guessedLetters={guessedLetters}
          guesses={guesses}
          score={score}/>}
      {gameEstagio === 'end' && <End reiniciar={reiniciar} />}
    </div>
  )
}

export default App
