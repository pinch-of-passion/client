import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function DifficultySelector({ difficult, setDifficult }) {

  const handleChange = (event, diff) => {
    if (diff !== null) {
      setDifficult(diff);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={difficult}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="easy">easy</ToggleButton>
        <ToggleButton value="medium">medium</ToggleButton>
        <ToggleButton value="hard">hard</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default DifficultySelector;