import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../../components'
import { getVehiclesDescription } from '../../helper'
import { fetchVehicles } from '../../store/slices/vehicles'
import styles from './Vehicles.module.css'

const Vehicles = () => {
  const dispatch = useDispatch()
  const { vehicles, loading, error } = useSelector((state) => state.vehicles)

  useEffect(() => {
    dispatch(fetchVehicles())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Vehicles</h1>
      <div className={styles.cardsContainer}>
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} cover={vehicle.src} description={getVehiclesDescription(vehicle)}>
            <Link to={`/vehicles/${vehicle.id}`} className={styles.vehicleLink}>
              {vehicle.vehicle_name}
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Vehicles
