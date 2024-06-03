import { useState, useEffect } from "react"

export function useCatImage({ fact }) {
    const [url, setUrl] = useState()
  
    useEffect(() => {
      if (!fact) return
      const first3Word = fact.split(' ', 3).join(' ')
      console.log(first3Word)
          
      fetch(`https://cataas.com/cat/says/${first3Word}?size=3&color=red`)
        .then(res => {
          const { url } = res
          setUrl(url)
        })
    
    }, [fact])
  
    return { url }
  }