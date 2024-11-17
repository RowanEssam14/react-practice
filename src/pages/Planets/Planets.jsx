import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { getplanetsDescription } from '../../helper'
import { fetchPlanets } from '../../store/slices'
import styles from './Planets.module.css'

const Planets = () => {
  const dispatch = useDispatch()
  const { planets, loading, error } = useSelector((state) => state.planets)
  const [currentPage, setCurrentPage] = useState(1)

  const resultsPerPage = 10
  const totalPages = Math.ceil(planets.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentPlanets = planets.slice(startIndex, endIndex)

  const handlePageClick = (page) => setCurrentPage(page)

  useEffect(() => {
    dispatch(fetchPlanets())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Planets</h1>
      <div className={styles.cardsContainer}>
        {currentPlanets.map((planets) => (
          <Card key={planets.id} cover={planets.src} description={getplanetsDescription(planets)} fit="cover">
            <Link to={`/planets/${planets.id}`} className={styles.planetsLink}>
              {planets.name}
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Planets
