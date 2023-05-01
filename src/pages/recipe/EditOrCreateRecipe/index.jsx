import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/joy';
import Image from './Image';
import { Paper, TextField } from '@mui/material';
import Ingridients from './Ingridients';
import Steps from './Steps';
import DifficultySelector from './DifficultySelector';
import ChooseCategories from './ChooseCategories';
import ChooseTags from './ChooseTags';
import { LoadingButton } from '@mui/lab';


function EditOrCreateRecipe({action}) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState({
        name: null,
        description: null,
        preperingTime: null,
        serves: null,
        difficult: "easy",
        ingredients: [{ qty: '', measuringUtensilId: null, ingredientId: null, meta: '' }],
        steps: [{ number: 1, direction: null }],
        img: null,
        tags: [],
        categories: []
    });
    const navigate=useNavigate()

    useEffect(() => {
        async function fetchData(recipeId) {
            const { data: recipeToEdit } = await axios.get(`http://localhost:3600/api/recipe/${recipeId}`)
            if (recipeToEdit) {
                const aa={
                    name: recipeToEdit.name,
                    description: recipeToEdit.description,
                    preperingTime: recipeToEdit.preperingTime,
                    serves: recipeToEdit.serves,
                    difficult: recipeToEdit.difficult,
                    ingredients: recipeToEdit.ingredients.map(i=>({qty: '', measuringUtensilId: null, ingredientId: i.id, meta: '' })),
                    steps: recipeToEdit.steps.map(step=>({direction:step.direction,number:step.number})),
                    img: recipeToEdit.img,
                    tags: recipeToEdit.tags.map(tag=>tag.id),
                    categories: recipeToEdit.categories.map(category=>category.id)
                }
                setRecipe(aa);
            }
        }

        if (action=="edit") {
            fetchData(queryParams.get("recipeId"))
        }

    }, []);

    const handleAddRecipe = async (event) => {
        event.preventDefault()
        debugger
        //setLoading(true);
        
        let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
        //const recipe = await axios.post("http://localhost:3600/api/recipe", recipe, config);
        setLoading(false)
        alert("added")
        navigate("/")
    }

    return (
        <Box component={"form"} onSubmit={handleAddRecipe} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => { debugger }}>debbuger</button>
            <Typography variant="h3" align="center" margin={3} color="danger">create a new recipe</Typography>
            <Image recipe={recipe} setRecipe={setRecipe}></Image>
            <Paper elevation={16} sx={{ my: 2, p: { xs: 6, md: 3 }, width: { xs: "98", sm: "80%", md: "70%" } }}>
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
                <Typography variant="h6">Description about your recipe</Typography>
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
                <DifficultySelector recipe={recipe} setRecipe={setRecipe} />
                <Typography variant="h6">servings</Typography>
                <TextField
                    style={{ marginLeft: '10px' }}
                    variant="outlined"
                    size="small"
                    type="number"
                    required
                    InputProps={{
                        inputProps: { min: 1 },
                        style: {
                            width: '100px',
                        },
                    }}
                    onChange={(e) => { setRecipe({ ...recipe, serves: e.target.value }) }}
                />
                <Typography variant="h6">preperingTime</Typography>
                <TextField
                    style={{ marginLeft: '10px' }}
                    variant="outlined"
                    size="small"
                    type="number"
                    required
                    InputProps={{
                        inputProps: { min: 1 },
                        style: {
                            width: '100px',
                        },
                    }}
                    onChange={(e) => { setRecipe({ ...recipe, preperingTime: e.target.value }) }}
                />

            </Paper>
            <Ingridients recipe={recipe} setRecipe={setRecipe} />
            <Steps recipe={recipe} setRecipe={setRecipe} />
            <Paper elevation={16} sx={{ my: 2, p: { xs: 6, md: 3 }, width: { xs: "98", sm: "80%", md: "70%" } }}>
                <ChooseCategories recipe={recipe} setRecipe={setRecipe} />
                <ChooseTags recipe={recipe} setRecipe={setRecipe} />
            </Paper>
            <LoadingButton
                size="large"
                loading={loading}
                loadingPosition="end"
                variant="outlined"
                type="submit"
            >
                <span>add recipe</span>
            </LoadingButton>
        </Box>
    )
}

export default EditOrCreateRecipe