import styles from './Homepage.module.scss'
import Recipe from './components/Recipe/Recipe';
// import { data } from "../../data/recipes";
import { useContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';
function Homepage() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true)
        const response = await fetch(BASE_URL_API);
        if (response.ok && !cancel) {
          const recipes = await response.json()
          setRecipes(Array.isArray(recipes) ? recipes : [recipes])

      }

      } catch (error) {
        console.log('Oupssss une erreur est survenue')
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipes();
    return () => cancel = true;
  }, [BASE_URL_API])

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className={`card flex-fill d-flex flex-column p-20 mb-20 ${styles.contentCard}`}>
        <div className={`d-flex flex-row justify-content-center align-item-center my-15 ${styles.search}`}>
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input onInput={ handleInput } className="flex-fill" type="text" placeholder='Rechercher'/>
        </div>
        { isLoading ? <Loading /> : (
        <div className={styles.grid}>

          { recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map( (r) => (
          <Recipe title={r.title} image={r.image} key={r._id}/>
          ))}

        </div>
        )}

      </div>
    </div>
  )
}

export default Homepage;
