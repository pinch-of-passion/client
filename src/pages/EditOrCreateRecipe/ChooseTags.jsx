import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Typography,ToggleButton ,ToggleButtonGroup} from '@mui/material';


function ChooseTags({ recipe, setRecipe }) {
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
      const { data: _tags } = await axios.get("http://localhost:3600/api/tag", config)
      if (_tags?.length) setTagsList(_tags)
    }
    fetchData()
  }, []);

  const setTags = (tags) => {
    setRecipe({ ...recipe,tags })
  }
  const handleChange = (event, tags) => {
      setTags(tags);
  };


  return (
    <>
    <Typography sx={{mt:2}} variant="h6">Tags:</Typography>
    <ToggleButtonGroup
      value={recipe.tags}
      onChange={handleChange}
      color="primary"
    >
      {tagsList?.map(tag => (
        <ToggleButton value={tag.id}>{tag.name}</ToggleButton>
      ))}
    </ToggleButtonGroup>
     </>
  );
}

export default ChooseTags;