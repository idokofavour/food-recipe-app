import { useState } from "react"
import Search from "./component/Search"
import RecipeList from "./component/RecipeList"
import Nav from "./component/Nav"
import  "./app.css" 
import Container from "./component/Container"
import InnerContainer from "./component/InnerContainer"
import RecipeDetails from "./component/RecipeDetails"
function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeId, setRecipeId] = useState("656329");
  

  return (
    <div>
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />

      <Container>
        <InnerContainer>
          <RecipeList setRecipeId={setRecipeId} recipeData={recipeData} />
        </InnerContainer>
        
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  )
}


export default App
