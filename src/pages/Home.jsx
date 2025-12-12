import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import RecipeList from "../components/RecipeList";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const savedIngredients = searchParams.get("ingredients") || "";

  const fetchRecipes = async (ingredients) => {
    try {
      setLoading(true);

      setSearchParams({ ingredients });

      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=16&apiKey=b69f1188dc7742f48ebcfbea7876ceeb`
      );

      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (savedIngredients) {
      fetchRecipes(savedIngredients);
    }
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Znajdź przepis po składnikach</h1>

      <p className="home-subtitle">
        Wpisz składniki, które masz pod ręką — a my znajdziemy najlepsze przepisy.
      </p>

      <SearchForm onSearch={fetchRecipes} savedValue={savedIngredients} />

      {loading && <div className="loader"></div>}

      {!loading && recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Home;
