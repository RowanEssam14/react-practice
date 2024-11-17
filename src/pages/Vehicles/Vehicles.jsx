import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Pagination } from '../../components'
import { getVehiclesDescription } from '../../helper'
import { fetchVehicles } from '../../store/slices/vehicles'
import styles from './Vehicles.module.css'

const Vehicles = () => {
  const dispatch = useDispatch()
  const { vehicles, loading, error } = useSelector((state) => state.vehicles)
  const [currentPage, setCurrentPage] = useState(1)

  const resultsPerPage = 10
  const totalPages = Math.ceil(vehicles.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentVehicles = vehicles.slice(startIndex, endIndex)

  const handlePageClick = (page) => setCurrentPage(page)

  useEffect(() => {
    dispatch(fetchVehicles())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Vehicles</h1>
      <div className={styles.cardsContainer}>
        {currentVehicles.map((vehicle) => (
          <Card key={vehicle.id} cover={vehicle.src} description={getVehiclesDescription(vehicle)} fit="cover">
            <Link to={`/vehicles/${vehicle.id}`} className={styles.vehicleLink}>
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
