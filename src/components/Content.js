import styles from './Content.module.scss'
import Recipe from './Recipe';
import { data } from "../data/recipes";
import { useState } from 'react';
function Content() {
  const recipes = data;
  const [filter, setFilter] = useState('')

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container p-20">
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.cardContent}`}>
        <div className={`d-flex flex-row justify-content-center align-item-center my-15 ${styles.search}`}>
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input onInput={ handleInput } className="flex-fill" type="text" placeholder='Rechercher'/>
        </div>
        <div className={styles.grid}>

          { recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map( (r) => (
          <Recipe title={r.title} image={r.image} key={r._id}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Content;
