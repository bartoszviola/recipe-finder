import { useState } from "react";

function SearchForm({ onSearch, savedValue }) {
  const [input, setInput] = useState(savedValue || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="np. chicken, rice, tomato"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Szukaj
      </button>
    </form>
  );
}

export default SearchForm;
