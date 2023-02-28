import styles from './Content.module.scss'
import Recipe from './Recipe';
import { data } from "../data/recipes";
function Content() {
  const recipes = data;
  return (
    <div className="flex-fill container p-20">
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.cardContent}`}>
        <div className={styles.grid}>

          { recipes.map( (r) => (
          <Recipe title={r.title} image={r.image} key={r._id}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Content;
