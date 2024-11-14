import { useState, useEffect } from 'react'

const useGetEpisodes = () => {
  const [films, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('http://localhost:3004/films')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setEpisodes(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  return { films, loading, error }
}

export default useGetEpisodes
