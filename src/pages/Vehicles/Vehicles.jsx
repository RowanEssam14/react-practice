import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { useGetCurrentChapters } from '../../hooks'
import { getVehiclesDescription } from '../../helper'
import { fetchVehicles } from '../../store/slices'
import { ROUTES } from '../../constants'
import styles from './Vehicles.module.css'

const Vehicles = () => {
  const dispatch = useDispatch()
  const { vehicles, loading, error } = useSelector((state) => state.vehicles)
  const [sortedVehicles, setSortedVehicles] = useState([])
  const [sortCriteria, setSortCriteria] = useState('vehicle_name')
  const [currentPage, setCurrentPage] = useState(1)
  const { currentItems, totalPages } = useGetCurrentChapters(currentPage, sortedVehicles)

  const handlePageClick = (page) => setCurrentPage(page)

  useEffect(() => {
    dispatch(fetchVehicles())
  }, [dispatch])

  useEffect(() => {
    const sorted = [...vehicles].sort((a, b) => {
      if (sortCriteria === 'vehicle_name') {
        return a.vehicle_name.localeCompare(b.vehicle_name)
      }
      if (sortCriteria === 'cost_in_credits') {
        const costA = Array.isArray(a.cost_in_credits) ? a.cost_in_credits.join('') : a.cost_in_credits
        const costB = Array.isArray(b.cost_in_credits) ? b.cost_in_credits.join('') : b.cost_in_credits

        const numA = parseInt(costA.replace(/[^0-9]/g, ''), 10) || 0
        const numB = parseInt(costB.replace(/[^0-9]/g, ''), 10) || 0

        return numA - numB
      }
      return 0
    })
    setSortedVehicles(sorted)
  }, [vehicles, sortCriteria])

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
            <option value="vehicle_name">Name</option>
            <option value="cost_in_credits">Cost in Credit</option>
          </select>
        </div>
      </header>
      <div className={styles.cardsContainer}>
        {currentItems.map((vehicle) => (
          <Card key={vehicle.id} cover={vehicle.src} description={getVehiclesDescription(vehicle)} fit="cover">
            <Link to={`${ROUTES.VEHICLES}/${vehicle.id}`} className={styles.vehicleLink}>
              {vehicle.vehicle_name}
            </Link>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageClick} />
    </div>
  )
}

export default Vehicles
