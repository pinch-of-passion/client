import React from 'react'
import IngredientHover from './ingredientHover'
import Typography from '@mui/material/Typography';
import pluralize from "pluralize"
import axios from "axios";
const aaa=async(id)=>{
        const data = await axios.get(`http://localhost:3600/api/measuringUtensil/${id}`)
        return data.data.name
}

const DisplayIngredients = ({ ingredients }) => {

    
    return (<>
        {ingredients && ingredients.map(i => (
            <>
            {/* <Typography variant='h6'>{i.recipeIngredient.qty} {(i.recipeIngredient.measuringUtensilId)}</Typography> */}
            <Typography variant='h6'>{i.recipeIngredient.qty} cup</Typography>
            <Typography variant='h6'><IngredientHover name={pluralize(i.name, i.recipeIngredient.qty)} img={i.img}></IngredientHover></Typography>
            </>
        ))}
    </>
    );
}

export default DisplayIngredients;


