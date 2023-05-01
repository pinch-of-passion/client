import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Button, Paper, Container, TextField, Box } from '@mui/material';
import { LoadingButton, ToggleButton, ToggleButtonGroup } from '@mui/lab';
import { FcAddImage } from "react-icons/fc";
import { Form } from "react-router-dom";
import { borderRadius } from "@mui/system";
import axios from "axios"
import { useEffect, useState } from "react"

import Image from './Image';
import Ingridients from './Ingridients';
import Steps from './Steps';
import DifficultySelector from './DifficultySelector';
import ChooseCategories from './ChooseCategories';
import ChooseTags from './ChooseTags';


function EditOrCreateRecipe({ action }) {
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
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData(recipeId) {
            const { data: recipeToEdit } = await axios.get(`http://localhost:3600/api/recipe/${recipeId}`)
            if (recipeToEdit) {
                debugger
                const cleanRecipe = {
                    name: recipeToEdit.name,
                    description: recipeToEdit.description,
                    preperingTime: recipeToEdit.preperingTime,
                    serves: recipeToEdit.serves,
                    difficult: recipeToEdit.difficult,
                    ingredients: recipeToEdit.ingredients.map(i => ({ qty: i.recipeIngredient.qty, measuringUtensilId: i.recipeIngredient.measuringUtensilId, ingredientId: i.id, meta: i.recipeIngredient.meta })),
                    steps: recipeToEdit.steps.map(step => ({ direction: step.direction, number: step.number })),
                    img: recipeToEdit.img,
                    tags: recipeToEdit.tags.map(tag => tag.id),
                    categories: recipeToEdit.categories.map(category => category.id)
                }
                setRecipe(cleanRecipe);
            }
        }

        if (action == "edit") {
            fetchData(queryParams.get("recipeId"))
        }

    }, []);

    const handleAddRecipe = async (newRecipe) => {
        //setLoading(true);

        let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
        const recipe = await axios.post("http://localhost:3600/api/recipe", newRecipe, config);
        debugger
        setLoading(false)
        alert("added")
        navigate("/")
    }

    const handleEditRecipe = async () => {
        //setLoading(true);
        debugger
        let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
        const recipe = await axios.put(`http://localhost:3600/api/recipe/${recipe.id}`, recipe, config);
        setLoading(false)
        alert("added")
        navigate("/")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        debugger
        if (action == "create")
            handleAddRecipe(recipe)
        if (action == "edit")
            handleEditRecipe()
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => { debugger }}>debbuger</button>
            <Typography variant="h2" align="center" margin={3} color="danger">
                {action == "create" ? "Create a new recipe" : "Edit your recipe"}
            </Typography>
            <Image recipe={recipe} setRecipe={setRecipe}></Image>
            <Paper elevation={16} sx={{ my: 2, p: { xs: 6, md: 3 }, width: { xs: "90", sm: "80%", md: "70%" } }}>
                <Typography variant="h6">recipe name</Typography>
                <TextField
                    onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
                    required
                    value={recipe.name}
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
                    value={recipe.description}
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
                    value={recipe.serves}
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
                    value={recipe.preperingTime}
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
            <Paper elevation={16} sx={{ my: 2, p: { xs: 6, md: 3 }, width: { xs: "90", sm: "80%", md: "70%" } }}>
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
                <span>{action == "create" ? "Create" : "Edit"}</span>
            </LoadingButton>
        </Box>
    )
}

export default EditOrCreateRecipe