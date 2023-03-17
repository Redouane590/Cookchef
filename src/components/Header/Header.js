import styles from './Header.module.scss';
import cookchef from '../../assets/images/cookchef.png'
import { useState } from 'react';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';

function Header() {

  const [showMenu, setShowMenu ] = useState(false);
  function handleClickMenu() {
    setShowMenu(true)
  }

  return (
  <header className={`${styles.header} d-flex flex-row align-items-center`}>

    <div className='flex-fill'>
      <img src={cookchef} alt='Logo cookchef'></img>
    </div>
    <ul className={styles.headerList}>
        <button className='mr-5 btn btn-reverse-primary'>
        <i className="fa-solid fa-heart mr-5"></i>
        <span>Wishlist</span>
        </button>
        <button className='btn btn-primary'>
          Connexion
        </button>
      </ul>
    <i onClick={handleClickMenu} className={`fa-solid fa-bars ${styles.bar}`} ></i>
    {showMenu && (
      <>
        <div onClick={ () => setShowMenu(false) } className='calc'></div>
        <HeaderMenu/>
      </>
    )}
  </header>
  )
}

export default Header;
