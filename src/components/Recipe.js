import styles from "./Recipe.module.scss";
import { useState } from "react";

function Recipe({ title, image}) {
const [liked, setLiked] = useState(false);
function handleClick() {
  setLiked(!liked)
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
