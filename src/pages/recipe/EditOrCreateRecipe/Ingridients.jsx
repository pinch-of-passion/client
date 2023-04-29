import { Typography } from '@mui/joy';
import { Autocomplete, FormGroup, IconButton, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';
import axios from 'axios';

function Ingridients({ingredients,recipe,setRecipe}) {
    const [ingredientsList, setIngredientsList] = useState([])
    const [measuringUtensilsList, setMeasuringUtensilsList] = useState([])
    const [alert, setAlert] = useState("");

    useEffect(() => {
        async function fetchData() {
            
            let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
            
            const { data: _ingredients } = await axios.get("http://localhost:3600/api/ingredient", config)
            if (_ingredients?.length) setIngredientsList(_ingredients)
            
            const { data: _measuringUtensils } = await axios.get("http://localhost:3600/api/measuringUtensil", config)
            if (_measuringUtensils?.length) setMeasuringUtensilsList(_measuringUtensils)
        }
        fetchData()
    }, []);

    const handleAddIngredient = () => {
        if (!ingredients[ingredients.length - 1].ingredientId)
            setAlert("Please select an ingredient");
        
        else
            setRecipe({...recipe,ingredients:[...ingredients,{qty: null, measuringUtensilId: null, ingredientId: null,meta:null}]});
    };

    const handleRemoveIngredient = (index) => {
        if (ingredients.length === 1) 
            setRecipe({...recipe,ingredients:[{ qty: null, measuringUtensilId: null, ingredientId: null,meta:null}]});
        
        else {
            const values = [...ingredients];
            values.splice(index, 1);
            setRecipe({...recipe,ingredients:[...values]});
        }
    };

  return (
    <>
    <Typography htmlFor="recipeIngredients" shrink variant="h4">ingredients:</Typography>
    {recipe.ingredients.map((ingredient, index) => (
        <FormGroup row key={index} sx={{ '& .MuiTextField-root': { m: 1, width: '20ch', display: 'flex', flexDirection: 'row', } }}>
            <TextField
                value={ingredient.qty}
                label="qty"
                type="number"
                variant="standard"
                onChange={(event) => {
                    const values = [...ingredients];
                    values[index].qty = parseInt(event.target.value);
                    setRecipe({...recipe,ingredients:values});
                }}
            ></TextField>
            <Autocomplete
                options={measuringUtensilsList}
                getOptionLabel={(option) => option.name}
                clearOnEscape
                value={ingredient.measuringUtensilId ? measuringUtensilsList.find((i) => i.id === ingredient.measuringUtensilId) : null}
                renderInput={(params) => (<TextField {...params} label="measuring utensil" variant="standard" />)}
                onChange={(event, newValue) => {
                    const values = [...ingredients];
                    values[index].measuringUtensilId = newValue?.id ?? null;
                    setRecipe({...recipe,ingredients:values});
                }}
            />
            <Autocomplete
                options={ingredientsList}
                value={ingredient.ingredientId ? ingredientsList.find((i) => i.id === ingredient.ingredientId) : null}
                getOptionLabel={(option) => option.name}
                clearOnEscape
                renderInput={(params) => (<TextField {...params} label="ingredient" variant="standard" />)}
                onChange={(event, newValue) => {
                    if (alert) setAlert("")
                    const values = [...ingredients];
                    values[index].ingredientId = newValue.id;
                    setRecipe({...recipe,ingredients:values});
                }}
            />
            <TextField
                id={`qty-${index}}`}
                value={ingredient.meta}
                label="meta "
                variant="standard"
                onChange={(event) => {
                    const values = [...ingredients];
                    values[index].meta = event.target.value;
                    setRecipe({...recipe,ingredients:values});
                }}
            ></TextField>
            <IconButton aria-label="delete" size="small"><DeleteIcon fontSize="small" onClick={() => handleRemoveIngredient(index)} /></IconButton>
        </FormGroup>
    ))}
    <IconButton aria-label="add" size="large"><AddIcon fontSize="large" onClick={handleAddIngredient} /></IconButton>
    {alert && <Alert sx={{ width: "50ch" }} severity="error">{alert}</Alert>}
</>
  )
}

export default Ingridients