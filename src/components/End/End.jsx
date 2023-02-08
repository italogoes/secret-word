import '../../assets/styles/End.css'

const End = ({reiniciar}) => {
  return (
    <div>
      <h2>Fim de jogo</h2>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default End