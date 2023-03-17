import styles from './HeaderMenu.module.scss'

function HeaderMenu() {
  return (
    <ul className={`card ${styles.MenuContainer} p-20`}>
      <li>WishList</li>
      <li>Connexion</li>
    </ul>
  );
}




export default HeaderMenu;
