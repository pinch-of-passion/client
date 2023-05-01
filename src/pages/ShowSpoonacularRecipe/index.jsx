import React, { useState, useEffect } from 'react';

import { Paper, Typography, Container, Divider, Box } from '@mui/material';
import axios from "axios";
import DisplayTags from "./DisplayTags";
import DisplayCategories from "./DisplayCategories";
import DisplayIngredients from "./DisplayIngredients";
import DisplayInstruction from "./DisplayInstruction"
import LeftButtons from './LeftButtons';
import Details from './Details';
import { useLocation } from 'react-router-dom';

function ShowSpoonacularRecipe() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [recipe, setRecipe] = useState({})
    const [summary, setSummary] = useState("Bourbon and Honey Grilled Pineapple Mint Julep is a <b>caveman, dairy free, primal, and vegetarian</b> recipe with 1 servings. For <b>$16.99 per serving</b>, this recipe <b>covers 59%</b> of your daily requirements of vitamins and minerals. One serving contains <b>2506 calories</b>, <b>21g of protein</b>, and <b>5g of fat</b>. 1 person found this recipe to be flavorful and satisfying. Only a few people really liked this side dish. Head to the store and pick up honey, water, ice, and a few other things to make it today. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes roughly <b>10 minutes</b>. It is brought to you by Bourbon and Honey. Overall, this recipe earns an <b>improvable spoonacular score of 1%</b>. Similar recipes include")

    useEffect(() => {
        async function fetchData() {
            if (queryParams.get("recipeId")) {
                const ans = await axios.get(`https://api.spoonacular.com/recipes/${queryParams.get("recipeId")}/information?apiKey=${process.env.REACT_APP_API_KEY3}`)
                if (ans.data) {
                    setRecipe(ans.data);
                }
                // const tmpSummary = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${process.env.REACT_APP_API_KEY3}`)
                // setSummary(tmpSummary.data.summary);
            }
        }
        fetchData()
        
    }, []);

    return (
        <>
            <LeftButtons recipe={recipe} />
            <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, }}>
               <Typography variant='h3'>{recipe?.title}</Typography>
                <Typography variant='h11'>{recipe?.summary}</Typography><br/>
                <img src={recipe?.image}></img>
                <Details recipe={recipe} />
                {recipe?.extendedIngredients && <DisplayIngredients ingredients={recipe?.extendedIngredients}></DisplayIngredients>}
                {recipe?.analyzedInstructions.length > 0 && <DisplayInstruction steps={recipe?.analyzedInstructions}></DisplayInstruction>}
                {recipe?.diets.length > 0 && <DisplayTags tags={recipe?.diets}></DisplayTags>}
                {recipe?.dishTypes > 0 && <DisplayCategories categories={recipe?.dishTypes}></DisplayCategories>}
            </Paper>  
        </>
    )
}

export default ShowSpoonacularRecipe;




