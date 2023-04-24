import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios"
import {TextField,Typography, FormGroup,Box,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';

const AddIngredients = ({ ingredients, setIngredients }) => {

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
            setIngredients([...ingredients, { qty: 0, measuringUtensilId: '', ingredientId: '',meta:'' }]);
    };

    const handleRemoveIngredient = (index) => {
        if (ingredients.length === 1) 
            setIngredients([{ qty: 0, measuringUtensilId: '', ingredientId: '' ,meta:''}]);
        
        else {
            const values = [...ingredients];
            values.splice(index, 1);
            setIngredients([...values]);
        }
    };

    return (
        <Box>
            <Typography htmlFor="recipeIngredients" shrink variant="h4">ingredients:</Typography>
            {ingredients.map((ingredient, index) => (
                <FormGroup row key={index} sx={{ '& .MuiTextField-root': { m: 1, width: '20ch', display: 'flex', flexDirection: 'row', } }}>
                    <TextField
                        id={`qty-${index}}`}
                        value={ingredient.qty}
                        label="qty"
                        type="number"
                        variant="standard"
                        onChange={(event) => {
                            const values = [...ingredients];
                            values[index].qty = parseInt(event.target.value);
                            setIngredients(values);
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
                            setIngredients(values);
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
                            setIngredients(values);
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
                            setIngredients(values);
                        }}
                    ></TextField>
                    <IconButton aria-label="delete" size="small"><DeleteIcon fontSize="small" onClick={() => handleRemoveIngredient(index)} /></IconButton>
                </FormGroup>
            ))}
            <IconButton aria-label="add" size="large"><AddIcon fontSize="large" onClick={handleAddIngredient} /></IconButton>
            {alert && <Alert sx={{ width: "50ch" }} severity="error">{alert}</Alert>}
        </Box>
    )
};

export default AddIngredients;