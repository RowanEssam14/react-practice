import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { ROUTES } from '../../constants'
import Logo from '../../assets/Logo.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logoImage} src={Logo} alt="" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.EPISODES}>
              Episodes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.CHARACTERS}>
              Characters
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.PLANETS}>
              Planets
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.SPECIES}>
              Species
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.VEHICLES}>
              Vehicles
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.STARSHIPS}>
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
