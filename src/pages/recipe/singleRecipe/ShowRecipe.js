import React, { useState, useEffect } from 'react';
import TimerIcon from '@mui/icons-material/Timer';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Box } from "@mui/system";
import { Paper, Typography, Container } from '@mui/material';
import axios from "axios";

import DisplayTags from "./DisplayTags";
import DisplayCategories from "./DisplayCategories";
import DisplayIngredients from "./DisplayIngredients";

const recipe = {
    "id": 1,
    "name": "apple",
    "img": "url",
    "preperingTime": 30,
    "description": "the best recipe ever",
    "difficult": "hard",
    "serves": 5,
    "ingredients": [
        {
            "id": 1,
            "name": "salt",
            "img": "url",
            "recipeIngredient": {
                "measuringUtensilId": 1,
                "qty": 2
            }
        },
        {
            "id": 1,
            "name": "water",
            "img": "url",
            "recipeIngredient": {
                "measuringUtensilId": 1,
                "qty": 5
            }
        }
    ],
    "steps": [
        {
            "id": 1,
            "direction": "cook all",
            "number": 2,
            "recipeId": 1
        },
        {
            "id": 2,
            "direction": "mix all",
            "number": 1,
            "recipeId": 1
        }
    ],
    "comments": [
        {
            "id": 1,
            "msg": "so yummy!!!!",
            "recipeId": 1
        },
        {
            "id": 2,
            "msg": "so easy!!!!",
            "recipeId": 1
        }
    ],
    "tags": ['milk', "low sugar"],
    "categories": ['purin']
}
const ShowRecipe = ({ recipeId }) => {
    const [Recipe, setRecipe] = useState(recipe)
    useEffect(() => {
        async function fetchData() {
            const ans = await axios.get(`http://localhost:3600/api/recipe/${recipeId}`)
            if (ans.data) {
                setRecipe(ans.data);
            }
        }
        // fetchData()
    }, []);

    return (
        <Container fixed component="main" sx={{ mb: 4 }}>
            <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant='h3'>{Recipe.name}</Typography>
                <Typography variant='h6'>{Recipe.description}</Typography>
                <img src="https://picsum.photos/900/400"></img>
                <Box sx={{
                    // justifyContent: 'space-around',
                    p: 1,
                    m: 1,
                    display: 'flex'
                }}>
                    <RoomServiceIcon></RoomServiceIcon>
                    <div>serves</div>
                    <div>{Recipe.serves}</div>
                    <div>&#8214;</div>
                    <TimerIcon></TimerIcon>
                    <div>{Recipe.preperingTime}</div>
                    <div>&#8214;</div>
                    <div>{Recipe.difficult}</div>
                </Box>
                {Recipe.tags && <DisplayTags tags={Recipe.tags}></DisplayTags>}
                {Recipe.categories && <DisplayCategories categories={Recipe.categories}></DisplayCategories>}
                {Recipe.ingredients && <DisplayIngredients ingredients={Recipe.ingredients}></DisplayIngredients>}
                <ModeCommentIcon></ModeCommentIcon>
            </Paper>
        </Container>
    )
}
export default ShowRecipe;