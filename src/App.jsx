import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { url } = useCatImage({ fact })
  
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> Kittens App </h1>
      <button onClick={handleClick}>Regenerate Fact</button>
      { fact && <p>{fact}</p>}
      { url && <img src={url}alt={`Image generated using the first three words for ${fact}`} />}
    </main>
  )
}
