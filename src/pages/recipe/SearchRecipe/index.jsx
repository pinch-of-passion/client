import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'
import { Box, Pagination, Paper } from '@mui/material';
import axios from "axios"
import RecipesGrid from './RecipesGrid';
import Filters from './Filters';


const SearchRecipe = ({ src }) => {

    const [recipes, setRecipes] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(1);
    const [itemsPerPage,setItemsPerPage] = useState(20);
    const [totalPages,setTotalPagegs] =useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const [where, setWhere] = useState({
        name: null,
        selectedDiets: [],
        selectedTypes: [],
        includeIngredients: [],
        excludeIngredients: [],
        maxReadyTime: null
    });

    const generateSpoonacularUrl = () => {
        let url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=0504f698616c4f9ea9fbaf8db69ccd8d&'
        url += `number=${itemsPerPage}&offset=${startIndex}&`
        if (where.name)
            url += `query=${where.name}&`
        if (where.maxReadyTime)
            url += `maxReadyTime=${where.maxReadyTime}&`
        if (where.excludeIngredients.length > 0)
            url += `excludeIngredients=${where.excludeIngredients.map(o => o.name).join(',')}&`
        if (where.includeIngredients.length > 0)
            url += `includeIngredients=${where.includeIngredients.map(o => o.name).join(',')}&`
        if (where.selectedDiets.length > 0)
            url += `diet=${where.selectedDiets.map(o => o.name).join(',')}&`
        if (where.selectedTypes.length > 0)
            url += `type=${where.selectedTypes.map(o => o.name).join(',')}&`
        return url;
    }

    useEffect(() => {
        async function fetchData() {
            const url = generateSpoonacularUrl()
            const ans = await axios.get(url)
            setTotalPagegs(Math.ceil(ans.data.totalResults / itemsPerPage));
            setRecipes(ans.data.results)
        }
        fetchData()
    }, [where,page,itemsPerPage,refresh]);

    return (
    <>
        <Filters where={where} setWhere={setWhere} />
        <RecipesGrid src={src} recipes={recipes} setRefresh={setRefresh} />
        <Pagination count={totalPages} page={page} onChange={(event, page) => { setPage(page) }} />
    </>
    )
}

export default SearchRecipe


