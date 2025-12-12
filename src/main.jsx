import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import Favorites from "./pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import RecipeDetails from "./pages/RecipeDetails"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>
          
          <Route index element={<Home />} />

          <Route path="recipe/:id" element={<RecipeDetails />} />

          <Route path="favorites" element={<Favorites />} />


        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
