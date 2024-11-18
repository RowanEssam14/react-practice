import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { useGetCurrentChapters } from '../../hooks'
import { getplanetsDescription } from '../../helper'
import { fetchPlanets } from '../../store/slices'
import { ROUTES } from '../../constants'
import styles from './Planets.module.css'

const Planets = () => {
  const dispatch = useDispatch()
  const { planets, loading, error } = useSelector((state) => state.planets)
  const [currentPage, setCurrentPage] = useState(1)
  const { currentItems, totalPages } = useGetCurrentChapters(currentPage, planets)

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
        {currentItems.map((planets) => (
          <Card key={planets.id} cover={planets.src} description={getplanetsDescription(planets)} fit="cover">
            <Link to={`${ROUTES.PLANETS}/${planets.id}`} className={styles.planetsLink}>
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
