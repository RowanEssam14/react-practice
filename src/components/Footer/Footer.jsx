import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyRight}>©2023 Lorem ipsum</div>
      <ul className={styles.footerList}>
        <li>Help</li>
        <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Footer
