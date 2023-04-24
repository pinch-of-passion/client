import React, { useState, useEffect } from 'react';
import TimerIcon from '@mui/icons-material/Timer';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Box } from "@mui/system";
import { Paper, Typography, Container } from '@mui/material';
import axios from "axios";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DisplayTags from "./DisplayTags";
import DisplayCategories from "./DisplayCategories";
import DisplayIngredients from "./DisplayIngredients";
import DisplayInstruction from "./DisplayInstruction"
// import ReactHtmlParser from 'react-html-parser';

function ShowSpoonacularRecipe({recipeId}) {
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        async function fetchData() {
            const ans = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=0504f698616c4f9ea9fbaf8db69ccd8d`)
            if (ans.data) {
                setRecipe(ans.data);
            }
            
        }
        fetchData()
    }, []);

    return (
        <Container fixed component="main" sx={{ mb: 4 }}>
            <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant='h3'>{recipe.title}</Typography>
                {/* <Typography variant='h6'>{ReactHtmlParser(recipe.summary)}</Typography> */}
                <img style={{width:"800px"}} src={recipe.image}></img>
                <Box sx={{
                    justifyContent: 'space-around',
                    p: 1,
                    m: 1,
                    display: 'flex',
                    maxWidth:800
                }}>
                    <RoomServiceIcon/>
                    <div> {recipe.servings} Serveings</div>
                    <div>&#8214;</div>
                    <TimerIcon/>
                    <div>Ready in <b>{recipe.readyInMinutes}</b> minutes</div>
                    <div>&#8214;</div>
                    <FavoriteRoundedIcon/>
                    <div>{recipe.aggregateLikes} loves</div>
                </Box>
                <DisplayInstruction recipeId={recipeId}></DisplayInstruction>
                <div>{recipe.diets && <DisplayTags tags={recipe.diets}></DisplayTags>}</div>
                {recipe.dishTypes && <DisplayCategories categories={recipe.dishTypes}></DisplayCategories>}
                {recipe.extendedIngredients && <DisplayIngredients ingredients={recipe.extendedIngredients} id={recipe.id}></DisplayIngredients>}
                <ModeCommentIcon></ModeCommentIcon>
            </Paper>
        </Container>
    )
}

export default ShowSpoonacularRecipe