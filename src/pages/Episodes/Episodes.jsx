import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../../components'
import { fetchEpisodes } from '../../store/slices/episodes'
import { getEpisodeDescription } from '../../helper'
import styles from './Episodes.module.css'

const Episodes = () => {
  const dispatch = useDispatch()
  const { episodes, loading, error } = useSelector((state) => state.episodes)
  const [sortedEpisodes, setSortedEpisodes] = useState([])
  const [sortCriteria, setSortCriteria] = useState('date')

  useEffect(() => {
    dispatch(fetchEpisodes())
  }, [dispatch])

  useEffect(() => {
    const sorted = [...episodes].sort((a, b) => {
      if (sortCriteria === 'date') return new Date(a.date) - new Date(b.date)
      if (sortCriteria === 'episodes') {
        const episodeA = parseInt(a.episode_name.match(/\d+/)?.[0] || 0, 10)
        const episodeB = parseInt(b.episode_name.match(/\d+/)?.[0] || 0, 10)
        return episodeA - episodeB
      }
      if (sortCriteria === 'name') return a.name.localeCompare(b.name)
      return 0
    })
    setSortedEpisodes(sorted)
  }, [episodes, sortCriteria])

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Episodes</h1>
        <div className={styles.sortContainer}>
          <span className={styles.sortLabel}>Sort by:</span>
          <select className={styles.sortDropdown} value={sortCriteria} onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="episodes">Episodes</option>
            <option value="name">Name</option>
          </select>
        </div>
      </header>
      <div className={styles.cardsContainer}>
        {sortedEpisodes.map((episode) => (
          <Card
            key={episode.id}
            cover={episode.src}
            title={episode.name}
            sticker={true}
            description={getEpisodeDescription(episode)}
          />
        ))}
      </div>
    </div>
  )
}

export default Episodes
