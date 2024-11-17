import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { ROUTES } from '../../constants'
import Logo from '../../assets/Logo.svg'
import { GiFilmProjector, GiBattleMech, GiAlienBug } from 'react-icons/gi'
import { VscChecklist } from 'react-icons/vsc'
import { IoPlanetSharp } from 'react-icons/io5'
import { SiStarship } from 'react-icons/si'

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
              <GiFilmProjector className={styles.icon} />
              Episodes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.CHARACTERS}>
              <GiAlienBug className={styles.icon} />
              Characters
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.PLANETS}>
              <IoPlanetSharp className={styles.icon} />
              Planets
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.SPECIES}>
              <VscChecklist className={styles.icon} />
              Species
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.VEHICLES}>
              <GiBattleMech className={styles.icon} />
              Vehicles
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to={ROUTES.STARSHIPS}>
              <SiStarship className={styles.icon} />
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
