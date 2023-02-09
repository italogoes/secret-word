import '../../assets/styles/End.css'

const End = ({reiniciar, score}) => {
  return (
    <div>
      <h2>Fim de jogo</h2>
      <span>A sua pontuação foi: {score}</span><br />
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default End