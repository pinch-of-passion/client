import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'
import { Box, Pagination, Paper } from '@mui/material';
import axios from "axios"
import RecipesGrid from './RecipesGrid';


const recipesList = [
    {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": "dgreg mga,rg m8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!! !!!!!!!!!!!! !!!!!!!!!!!",
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui, fagb a ,fbagbjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
        "difficult": "easy",
        "serves": 4
    }, {
        "id": 3,
        "userId": 1,
        "name": "thtsrghn",
        "img": null,
        "preperingTime": 55,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui vfgavf gbt y65tereh635t 6y ",
        "difficult": "medium",
        "serves": 3
    },
    {
        "id": 4,
        "userId": 1,
        "name": "ewfver",
        "img": null,
        "preperingTime": 44,
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76ui4eytj 4ui 6yc35f3y3c3h6y",
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
        "description": "dgrega54q yt wy7i uy4y565u7 iejyjy y ju76j  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
        "description": "dgrega54q yt wyjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
        "description": "dgrega54q yt wyjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
        "description": "dgrega54q yt wyjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
        "description": "dgrega54q yt wyjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
        "description": "dgrega54q yt wyjj  twitrgn ug ,  rghhfh4849r f gm4 rurm 7f8ruwghm mga,rg m8",
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
const SearchRecipe = ({ src }) => {

    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
    const totalPages = Math.ceil(recipesList.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const visibleRecipes = recipesList.slice(startIndex, startIndex + itemsPerPage);
    const [recipes, setRecipes] = useState([]);

    


    return (<>
        {/* <Filters recipes={recipes} setRecipes={setRecipes} /> */}
        <RecipesGrid src={src} recipes={visibleRecipes} />
        <Pagination count={totalPages} page={page} onChange={(event, page) => { setPage(page) }} />
    </>
    )
}

export default SearchRecipe


