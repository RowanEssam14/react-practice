import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { getStarshipsDescription } from '../../helper'
import { fetchStarShips } from '../../store/slices'
import styles from './Starships.module.css'

const Starships = () => {
  const dispatch = useDispatch()
  const { starShips: starships, isLoading: loading, error } = useSelector((state) => state.starShips)
  const [sortedStarships, setSortedStarships] = useState([])
  const [sortCriteria, setSortCriteria] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)

  const resultsPerPage = 10
  const totalPages = Math.ceil(starships.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentStarships = sortedStarships.slice(startIndex, endIndex)

  const handlePageClick = (page) => setCurrentPage(page)

  useEffect(() => {
    dispatch(fetchStarShips())
  }, [dispatch])

  useEffect(() => {
    const sorted = [...starships].sort((a, b) => {
      if (sortCriteria === 'name') {
        return a.name.localeCompare(b.name)
      }
      if (sortCriteria === 'cost_in_credits') {
        return (a.cost_in_credits || 0) - (b.cost_in_credits || 0)
      }
      return 0
    })
    setSortedStarships(sorted)
  }, [starships, sortCriteria])

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Vehicles</h1>
        <div className={styles.sortContainer}>
          <span className={styles.sortLabel}>Sort by:</span>
          <select className={styles.sortDropdown} value={sortCriteria} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="cost_in_credits">Cost in Credit</option>
          </select>
        </div>
      </header>
      <div className={styles.cardsContainer}>
        {currentStarships.map((starShip) => (
          <Card key={starShip.id} cover={starShip.src} description={getStarshipsDescription(starShip)} fit="cover">
            <Link to={`/starships/${starShip.id}`} className={styles.starShipLink}>
              {starShip.name}
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Starships
