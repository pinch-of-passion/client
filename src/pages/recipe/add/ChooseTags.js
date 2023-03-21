import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Typography, FormGroup,Box } from '@mui/material';
import { Checkbox, FormControlLabel, FormControl } from '@material-ui/core';

function ChooseTags({ selectedTags, setSelectedTags }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
      const { data: _tags } = await axios.get("http://localhost:3600/api/tag", config)
      if (_tags?.length) setTags(_tags)
    }
    fetchData()
  }, []);

  const handleSelected = (tagId, event) => {
    if (event.target.checked) {
      setSelectedTags([...selectedTags, tagId]);
    }
    else
      setSelectedTags([...selectedTags.filter(t => t != tagId)]);
  };


  return (
    <Box>
      <FormControl component="fieldset">
        <Typography variant="h6">tags:</Typography>
        <FormGroup row>
          {tags.map(tag => (
            <FormControlLabel onClick={(event) => handleSelected(tag.id, event)} key={tag.id} value={tag.id} control={<Checkbox color="default" checked={selectedTags.indexOf(tag.id) !== -1} />} label={tag.name} />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default ChooseTags;