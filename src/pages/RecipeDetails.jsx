import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../services/favoriteService";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [favorite, setFavorite] = useState(isFavorite(Number(id)));

  const fetchDetails = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=b69f1188dc7742f48ebcfbea7876ceeb`
      );

      const data = await res.json();
      setRecipe(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (!recipe) return;

    if (favorite) {
      removeFavorite(recipe.id);
      setFavorite(false);
    } else {
      addFavorite({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        likes: recipe.aggregateLikes,
      });
      setFavorite(true);
    }
  };

  if (loading) return <div className="loader"></div>;
  if (!recipe) return <p>Nie znaleziono przepisu.</p>;

  return (
    <motion.div
      className="details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src={recipe.image} alt={recipe.title} className="details-image" />

      <h1 className="details-title">{recipe.title}</h1>

      <button className="fav-btn2" onClick={toggleFavorite}>
        {favorite ? "⭐ Usuń z ulubionych" : "☆ Dodaj do ulubionych"}
      </button>

      <p className="details-meta">
        ⏱️ {recipe.readyInMinutes} min · 🍽️ {recipe.servings} porcji
      </p>

      <h2>Składniki</h2>
      <ul className="details-ingredients">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h2>Instrukcje</h2>
      <p
        className="details-instructions"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      ></p>
    </motion.div>
  );
}

export default RecipeDetails;
