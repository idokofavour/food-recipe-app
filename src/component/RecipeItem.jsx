import styles from './recipeItem.module.css'
export default function RecipeItem({ recipe, setRecipeId }){
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={recipe.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{recipe.title}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button 
                onClick={() => {setRecipeId(recipe.id)}} className={styles.itemButton}>View recipe</button>
            </div>
        </div>
    )
}