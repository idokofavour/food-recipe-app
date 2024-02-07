import { useEffect, useState } from "react";
import styles from './recipeDetails.module.css'
import ItemList from "./ItemList";

export default function RecipeDetails({ recipeId }) {
    const [recipe, setRecipe] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information`;

    const ApiKey = '463aec9317d746d190f27b2221f7fa10';

    useEffect(()=> {
        async function fetchRecipe() {
            const res = await fetch(`${apiUrl}?apiKey=${ApiKey}`);
            const data = await res.json();
            setRecipe(data);
            setIsLoading();
        }
        fetchRecipe()
    }, [recipeId])

    return (   
    <div>
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{recipe.title}</h1>
          <img className={styles.recipeImage} src={recipe.image} alt="" />
            <div className={styles.recipeDetails}>
                <span>
                    <strong>⏱️ {recipe.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    👪 <strong>Serves {recipe.servings}</strong>
                </span>
                <span>
                    <strong>
                        {recipe.vegetarian ? "🥬Vegetarian": "🥩 Non-Vegetarian" }
                    </strong>
                </span>
                <span>
                    <strong>
                        {recipe.vegan ? "🌱 Vegan" : ""}
                    </strong>
                </span>
            </div>
            <div>
                <strong>
                  $ <span>{recipe.pricePerServing/100} Per serving</span>

                </strong>
            </div>
                <h2>Ingredients</h2>
                <ItemList recipe={recipe} isLoading={isLoading} />
                <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
                <ol>
                    {isLoading ? <p>Loading...</p>: recipe.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                    ))}
                </ol>
                
            </div>
        </div>
    </div>
    )
}