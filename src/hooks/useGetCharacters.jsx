import { useState, useEffect } from 'react'

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('http://localhost:3004/characters')
        if (!response.ok) {
          throw new Error(' Network response was not ok ')
        }
        const data = await response.json()
        setCharacters(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacters()
  }, [])

  return { characters, loading, error }
}

export default useGetCharacters
