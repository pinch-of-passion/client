import React from 'react'
import IngredientHover from './ingredientHover'
export const DisplayIngredients = ({ ingredients }) => {
    const pluralize = require('pluralize')
    const ing = ingredients.map(element => {
        return <>
            <div>{element.recipeIngredient.qty}  {element.recipeIngredient.measuringUtensilId}  </div>
            <IngredientHover name={pluralize(element.name, element.recipeIngredient.qty)} img={element.img}></IngredientHover>
        </>})

return (
    <div>{ing}</div>

)
    
}
