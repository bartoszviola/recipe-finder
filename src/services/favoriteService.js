export function getFavorites() {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(list) {
  localStorage.setItem("favorites", JSON.stringify(list));
}

export function addFavorite(recipe) {
  const favorites = getFavorites();
  const exists = favorites.some((item) => item.id === recipe.id);

  if (!exists) {
    favorites.push(recipe);
    saveFavorites(favorites);
  }
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter((item) => item.id !== id);
  saveFavorites(favorites);
}

export function isFavorite(id) {
  return getFavorites().some((item) => item.id === id);
}
