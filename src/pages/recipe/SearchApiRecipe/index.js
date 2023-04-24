import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'
import { Box, Pagination, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from "axios"
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { CenterFocusStrong } from '@mui/icons-material';

const recipesList = [
    {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui",
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "easy",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui",
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui",
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui",
        "difficult": "easy",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": "dgrega54q yt wy7i uy4y565u7 ",
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "hard",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": null,
        "difficult": "easy",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": null,
        "difficult": "medium",
        "serves": 4
    }
]




const SearchSpoonacularRecipe = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
    const totalPages = Math.ceil(recipesList.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const visibleRecipes = recipesList.slice(startIndex, startIndex + itemsPerPage);
    const [maxReadyTime, setMaxReadyTime] = useState("");
    const [selectedtype, setSelectedtype] = useState([]);
    const [excludeIngredients, setExcludeIngredients] = useState([]);
    const [includeIngredients, setIncludeIngredients] = useState([]);
    const [name, setName] = useState("");
    const [selectedDiets, setSelectedDiets] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const [ingredients, setiIngredients] = useState([{ name: "aaa" }, { name: "bbdrgs" }, { name: "cccg" }]);
    const [types, setTypes] = useState([]);
    const [diets, setDiets] = useState([]);
    const [advancedFilter, setAdvancedFilter] = useState(false);


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
    }, [])
    return (
        <>
            <Box sx={{
                marginRight: 'auto',
                marginLeft: 'auto',
                textAlign: 'center',
                boxShadow: 1,
                borderRadius: 2,
                backgroundColor: 'pink',
                maxWidth: 1200,
                margin: 5,
                padding: 2
            }}>
                <Paper elevation={16} />
                <h1>filter</h1>
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
                        defaultValue={excludeIngredients}
                        renderInput={(params) => (
                            <TextField {...params} label="exclude Ingredients" placeholder="exclude Ingredients" />
                        )}
                        sx={{ width: '350px' }}
                        onChange={(event, values) => { setExcludeIngredients(values) }}

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
                        onChange={(event, values) => { setSelectedtype(values) }}

                    />
                    <Autocomplete
                        
                        filterSelectedOptions
                        limitTags={1}
                        options={["less than 30 min", "less than 1 hour"]}
                        getOptionLabel={(option) => option}
                        defaultValue={maxReadyTime}

                        renderInput={(params) => (
                            <TextField {...params} label="Cook and Prep. Time" placeholder="Cook and Prep. Time" />
                        )}
                        sx={{ width: '350px' }}
                        onChange={(event, values) => { setMaxReadyTime(values) }}
                    />
                </Stack>

                </div>
                <Paper />
            </Box>
            <Box sx={{ flexGrow: 1,width:"80%" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
                    {visibleRecipes.map((recipe, index) => (
                        <Grid key={index}>
                            <RecipeCard recipe={recipe} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </>

    )
}

export default SearchSpoonacularRecipe;




