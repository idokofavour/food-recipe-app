import Item from "./Item";

export default function ItemList({ recipe, isLoading }) {
    return <div>
        {isLoading ? (<p>Loading...</p>) : recipe.extendedIngredients.map((item) => (
            <Item item={item} />
        ))}
    </div>
}