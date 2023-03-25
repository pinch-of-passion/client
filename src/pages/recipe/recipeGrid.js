import React, { useState } from 'react';
import { Box, Pagination } from '@mui/material';
// import { Grid, Box, Pagination } from '@mui/material';
//import GridRecipe from "./gridRecipe"

const recipes = [
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
];

const RecipesGrid = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const visibleRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
    <Box sx={{ display:'flex', justifyContent:"center", alignItems:'center'}}>
      <Grid container spacing={2}  xs={4}>
        {visibleRecipes.map((recipe, index) => (
<></>
              // <GridRecipe image={recipe.image} title={recipe.title}  key={index}/>
        ))}
      </Grid>
    </Box>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
</>
  );
};

export default RecipesGrid;