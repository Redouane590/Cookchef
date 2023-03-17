import { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import styles from "./Recipe.module.scss";

function Recipe({ recipe : {liked, _id, image, title}, toggleLikedRecipe}) {
  const BASE_API_URL = useContext(ApiContext);

async function handleClick() {
  try {
    const response = await fetch(`${BASE_API_URL}/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        liked: !liked
      })
    });
    if (response.ok) {
      const updatedRecipe = await response.json();
      toggleLikedRecipe(updatedRecipe)
    }

  } catch (error) {
      console.log('Erreur lors du like')
  } finally {

  }

}
  return (
    <div onClick={ handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recette" />
      </div>
      <div className={`d-flex flex-column align-items-center justify-content-center ${styles.recipeTitle}`}>
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${ liked ? 'text-primary' : ''}` }></i>
      </div>
    </div>

  )
}

export default Recipe;
