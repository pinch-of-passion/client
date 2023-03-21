import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Typography, FormGroup,Box } from '@mui/material';
import { Checkbox, FormControlLabel, FormControl } from '@material-ui/core';



function ChooseCategories({ selectedCategories, setSelectedCategories }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
      const { data: _categories } = await axios.get("http://localhost:3600/api/category", config)
      if (_categories?.length) setCategories(_categories)
    }
    fetchData()
  }, []);

  const handleSelected = (categoryId, event) => {
    if (event.target.checked)
      setSelectedCategories([...selectedCategories, categoryId]);
    else
      setSelectedCategories([...selectedCategories.filter(c => c != categoryId)]);

  };

  return (
    <Box>
      <FormControl component="fieldset">
        <Typography variant="h6">categories:</Typography>
        <FormGroup row>
          {categories.map(category => (
            <FormControlLabel onClick={(event) => handleSelected(category.id, event)} key={category.id} value={category.id}
              control={<Checkbox color="default" checked={selectedCategories.indexOf(category.id) !== -1} />} label={category.name} />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
export default ChooseCategories;











