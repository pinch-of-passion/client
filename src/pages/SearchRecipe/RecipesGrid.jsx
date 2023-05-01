import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'

const RecipesGrid = ({recipes,src,setRefresh}) => {

    return (
        <div style={{ flexWrap: "wrap", justifyContent: "center", display: "flex",padding:50}}>
            {recipes?.map((recipe,index) => (
                <RecipeCard key={index} recipe={recipe} src={src} setRefresh={setRefresh} />
            ))}
        </div>
    )
}

export default RecipesGrid

 
