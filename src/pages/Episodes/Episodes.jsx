import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Pagination } from '../../components'
import { fetchEpisodes } from '../../store/slices'
import { ROUTES } from '../../constants'
import { getEpisodeDescription } from '../../helper'
import styles from './Episodes.module.css'

const Episodes = () => {
  const dispatch = useDispatch()
  const { episodes, loading, error } = useSelector((state) => state.episodes)
  const [sortedEpisodes, setSortedEpisodes] = useState([])
  const [sortCriteria, setSortCriteria] = useState('date')
  const [currentPage, setCurrentPage] = useState(1)

  const resultsPerPage = 10
  const totalPages = Math.ceil(episodes.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentEpisodes = sortedEpisodes.slice(startIndex, endIndex)

  const handlePageClick = (page) => setCurrentPage(page)

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
        {currentEpisodes.map((episode) => (
          <Card
            key={episode.id}
            cover={episode.src}
            sticker={true}
            description={getEpisodeDescription(episode)}
            fit="cover"
          >
            <Link to={`${ROUTES.EPISODES}/${episode.id}`} className={styles.episodeLink}>
              {episode.name}
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Episodes
