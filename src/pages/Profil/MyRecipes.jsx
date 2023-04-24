import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'
import { Box, Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from "axios"
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const recipesList = [
    { title: 'Recipe 1', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 2', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 3', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 4', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 5', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 6', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 7', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 8', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 9', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 10', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 11', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 12', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 13', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 14', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 15', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 100', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 200', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 300', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 400', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 500', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 600', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 700', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 800', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 900', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 10000', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 1001', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 12000', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 13000', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 1400', image: 'https://via.placeholder.com/150' },
    { title: 'Recipe 1522', image: 'https://via.placeholder.com/150' },
];


const MyRecipes = ({image,title,description}) => {

    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
    const totalPages = Math.ceil(recipesList.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const visibleRecipes = recipesList.slice(startIndex, startIndex + itemsPerPage);
    const [maxReadyTime, setMaxReadyTime] = useState(60);
    const [selectedtype, setSelectedtype] = useState([]);
    const [excludeIngredients, setExcludeIngredients] = useState([]);
    const [includeIngredients, setIncludeIngredients] = useState([]);
    const [name, setName] = useState("");
    const [selectedDiets, setSelectedDiets] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const [ingredients, setiIngredients] = useState([{ name: "aaa" }, { name: "bbdrgs" }, { name: "cccg" }]);
    const [types, setTypes] = useState([]);
    const [diets, setDiets] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        async function fetchData() {
            let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }

            const { data: _ingredients } = await axios.get("http://localhost:3600/api/ingredient", config)
            if (_ingredients?.length) setiIngredients(_ingredients)

            const { data: _categories } = await axios.get("http://localhost:3600/api/category", config)
            if (_categories?.length) setTypes(_categories)

            const { data: _tags } = await axios.get("http://localhost:3600/api/tag", config)
            if (_categories?.length) setDiets(_tags)

        }
        fetchData()
    }, []);

    return (
        <><h1>filter</h1>
            <div><Stack direction={{ xs: 'column', md: 'row' }} spacing={2} >
                <Autocomplete
                    multiple
                    limitTags={1}
                    options={ingredients}
                    filterSelectedOptions
                    getOptionLabel={(option) => option.name}
                    defaultValue={includeIngredients}
                    renderInput={(params) => (
                        <TextField {...params} label="includeIngredients" placeholder="includeIngredients" />
                    )}
                    sx={{ width: '350px' }}
                    onChange={(event, values) => { setIncludeIngredients(values) }}
                />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    limitTags={1}
                    options={ingredients}
                    getOptionLabel={(option) => option.name}
                    defaultValue={selectedtype}
                    renderInput={(params) => (
                        <TextField {...params} label="excludeIngredients" placeholder="excludeIngredients" />
                    )}
                    sx={{ width: '350px' }}
                    onChange={(event, values) => { setSelectedtype(values) }}
                />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    limitTags={1}
                    defaultValue={selectedDiets}
                    options={diets}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <TextField {...params} label="diets" placeholder="diets" />
                    )}
                    onChange={(event, values) => { setSelectedDiets(values) }}
                    sx={{ width: '350px' }}
                />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    limitTags={1}
                    options={types}
                    getOptionLabel={(option) => option}
                    defaultValue={selectedtype}
                    renderInput={(params) => (
                        <TextField {...params} label="types" placeholder="types" />
                    )}
                    sx={{ width: '250px' }}
                />
            </Stack>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
                    {visibleRecipes.map((recipe, index) => (
                        <Grid key={index}>
                            {/* <Grid xs={2} sm={4} md={200} key={index}> */}
                            <RecipeCard image={recipe.image} title={recipe.title} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </>

    )
}


export default MyRecipes



