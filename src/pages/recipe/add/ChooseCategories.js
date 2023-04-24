import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Typography,ToggleButton ,ToggleButtonGroup} from '@mui/material';

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
}
export default ChooseCategories;











