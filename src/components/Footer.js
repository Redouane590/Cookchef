import styles from './Footer.module.scss'

function Footer() {
  return (
  <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
    <p> Copyright ² 2023 Cookchef By Redouane Inc.</p>
  </footer>
  )
}

export default Footer;
