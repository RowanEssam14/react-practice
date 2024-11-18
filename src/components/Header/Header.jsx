import { NavLink } from 'react-router-dom'
import { GiFilmProjector, GiBattleMech, GiAlienBug } from 'react-icons/gi'
import { VscChecklist } from 'react-icons/vsc'
import { IoPlanetSharp } from 'react-icons/io5'
import { SiStarship } from 'react-icons/si'
import { ROUTES } from '../../constants'
import Logo from '../../assets/Logo.svg'
import styles from './Header.module.css'

const getLinkClassName = ({ isActive }) => (isActive ? styles.active : styles.navLink)

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logoImage} src={Logo} alt="" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.EPISODES}>
              <GiFilmProjector className={styles.icon} />
              Episodes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.CHARACTERS}>
              <GiAlienBug className={styles.icon} />
              Characters
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.PLANETS}>
              <IoPlanetSharp className={styles.icon} />
              Planets
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.SPECIES}>
              <VscChecklist className={styles.icon} />
              Species
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.VEHICLES}>
              <GiBattleMech className={styles.icon} />
              Vehicles
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={getLinkClassName} to={ROUTES.STARSHIPS}>
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
