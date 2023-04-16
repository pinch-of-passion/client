import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Typography, FormGroup, Box, Paper } from '@mui/material';
import { Checkbox, FormControlLabel, FormControl } from '@material-ui/core';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ChooseCategories({ selectedCategories, setSelectedCategories }) {
  const [categories, setCategories] = useState([{ id: 1, name: "aaa" }, { id: 2, name: "bbbb" }, { id: 3, name: "33ccc" }, { id: 4, name: "dddddddd4 ddd" }, { id: 5, name: "555" }, { id: 6, name: "666" }]);

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
  const handleChange = (event, categories) => {
    setSelectedCategories(categories);
  };

  return (
    <>
      <Typography variant="h6">categories:</Typography>
      <ToggleButtonGroup
        value={selectedCategories}
        onChange={handleChange}
        color="primary"
      >
          {categories.map(category => (
            <ToggleButton value={category.id}>{category.name}</ToggleButton>
          ))}
        </ToggleButtonGroup>
    </>
  );

  // return (
  //   <Box>
  //     <FormControl component="fieldset">
  //       <Typography variant="h6">categories:</Typography>
  //       <FormGroup row>
  //         {categories.map(category => (
  //           <FormControlLabel onClick={(event) => handleSelected(category.id, event)} key={category.id} value={category.id}
  //             control={<Checkbox color="default" checked={selectedCategories.indexOf(category.id) !== -1} />} label={category.name} />
  //         ))}
  //       </FormGroup>
  //     </FormControl>
  //   </Box>
  // );
}
export default ChooseCategories;











