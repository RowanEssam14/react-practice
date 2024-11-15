import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
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
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to="/episodes">
              Episodes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : styles.navLink)} to="/characters">
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
