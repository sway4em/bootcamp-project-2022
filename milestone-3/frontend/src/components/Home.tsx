import React, { useEffect, useState } from 'react';
import RecipePreview from '../components/recipePreview';
import { RecipePreviewProps } from '../components/recipePreview';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, Row } from 'react-bootstrap';
interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  _id: string
}

export default function Home(){
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
    .then((response) => response.json())
    .then(recipeData => {
      setRecipes(recipeData)
      console.log(recipeData)
    })
    .catch((err) => console.log(err))
  }, [])
    return(
      <div>
            {[...recipes].map((recipe) => (
              <div className='card-columns'>
    <RecipePreview
      _id= {recipe._id}
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
              </div>

    
  ))}
        </div>
    )
}