import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const [fact, setFact] = useState()
  const { url } = useCatImage({ fact })



  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])
  
  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
