import RecipeItem from "./RecipeItem";
export default function RecipeList({ recipeData, setRecipeId }) {
    return (
        <div>
            {recipeData.map((recipe) => <RecipeItem setRecipeId={setRecipeId} key={recipe.id} recipe={recipe} />
            )}
        </div>
    )
}