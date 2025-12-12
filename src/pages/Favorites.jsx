import { getFavorites, removeFavorite } from "../services/favoriteService";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div>
      <h1>Ulubione przepisy</h1>

      {favorites.length === 0 && <p>Nie masz jeszcze ulubionych przepisów 💜</p>}

      <div className="recipe-grid">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
