import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recette.jpg";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={ recipe } alt="recette" />
      </div>
      <div className={`d-flex flex-row align-items-center justify-content-center ${styles.recipeTitle}`}>
        <h3>Saumon et asperges</h3>
      </div>
    </div>

  )
}

export default Recipe;
