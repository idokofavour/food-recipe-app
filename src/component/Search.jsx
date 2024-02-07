import { useState, useEffect } from "react";
import styles from "./search.module.css";

const ApiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
const ApiKey = '463aec9317d746d190f27b2221f7fa10';

export default function Search({ recipeData, setRecipeData }) {
    const [query, setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchRecipe() {
          const res = await fetch(`${ApiUrl}?query=${query}&apiKey=${ApiKey}`);
          const data = await res.json();
          setRecipeData(data.results)
        }
        fetchRecipe()
    }, [query])

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
        </div>
    )
}




