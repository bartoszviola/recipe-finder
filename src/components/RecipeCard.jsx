import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../services/favoriteService";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(isFavorite(recipe.id));

  const toggleFavorite = (e) => {
    e.stopPropagation();

    if (favorite) {
      removeFavorite(recipe.id);
      setFavorite(false);
    } else {
      addFavorite(recipe);
      setFavorite(true);
    }
  };

  return (
    <motion.div
      className="recipe-card"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 18px rgba(0,0,0,0.25)" }}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <button
        className="fav-btn"
        onClick={toggleFavorite}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "1.8rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <img src={recipe.image} alt={recipe.title} />
      <h3 className="recipe-title">{recipe.title}</h3>
      <p className="recipe-likes">❤️ {recipe.likes} likes</p>
    </motion.div>
  );
}

export default RecipeCard;
