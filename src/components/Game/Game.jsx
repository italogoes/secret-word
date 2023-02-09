import { useState, useRef } from 'react'
import '../../assets/styles/Game.css'

const Game = ({
  verificarLetra, 
  pickedWord, 
  pickedCategory, 
  letters, 
  wrongLetters, 
  guessedLetters, 
  guesses, 
  score
}) => {
  const [letter, setLetter] = useState("")
  const letteInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verificarLetra(letter)
    setLetter('')

    letteInputRef.current.focus()
  }

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p className='tentativas'>Você ainda tem {guesses} tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
        
      </div>
      <div className="letterContainer">
        <p>Tente Advinha uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='letter' 
          maxLength="1" 
          required 
          onChange={(e) => setLetter(e.target.value)} 
          value={letter}
          ref={letteInputRef}/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter},</span>
        ))}
      </div>
    </div>
  )
}

export default Game