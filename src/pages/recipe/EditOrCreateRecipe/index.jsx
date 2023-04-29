import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/joy';
import Image from './Image';
import { Paper, TextField } from '@mui/material';
import Ingridients from './Ingridients';

function EditOrCreateRecipe() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState({
        name: null,
        description: null,
        preperingTime: null,
        serves: null,
        difficult: "easy",
        ingredients: [{ qty: null, measuringUtensilId: null, ingredientId: null, meta: null }],
        steps: [{ number: 1, direction: null }],
        img: null,
        tags: [],
        categories: []
    });

    useEffect(() => {
        async function fetchData(recipeId) {
            const ans = await axios.get(`http://localhost:3600/api/recipe/${recipeId}`)
            if (ans.data) {
                setRecipe(ans.data);
            }
        }

        if (queryParams.get("recipeId")) {
            fetchData(queryParams.get("recipeId"))
        }

    }, []);



    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3" align="center" margin={5} color="danger">create a new recipe</Typography>
            <Image recipe={recipe} setRecipe={setRecipe}></Image>
            <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 }, width: { xs: "98", sm: "80%", md: "70%" } }}>
                <Typography variant="h6">recipe name</Typography>
                <TextField
                    onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
                    required
                    size="small"
                    sx={{ width: "95%" }}
                    InputProps={{
                        style: {
                            borderRadius: 15,
                            marginBottom: 25,
                        },
                    }}
                />
                <Typography htmlFor="recipeDescription" shrink variant="h6">Description about your recipe</Typography>
                <TextField
                    id="recipeDescription"
                    multiline
                    rows={5}
                    size="small"
                    sx={{ width: "95%" }}
                    InputProps={{
                        style: {
                            borderRadius: 15,
                            marginBottom: 25
                        },
                    }}
                    onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
                />

            </Paper>

            <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 }, width: { xs: "98%", sm: "80%", md: "70%" } }}>
                <Ingridients recipe={recipe} setRecipe={setRecipe} ingredients={recipe.ingredients}/>
            </Paper>

        </div>
    )
}

export default EditOrCreateRecipe