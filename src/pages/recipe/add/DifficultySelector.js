import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
// import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function DifficultySelector({ difficult, setDifficult }) {

  const handleChange = (event, diff) => {
    if (diff !== null) {
      setDifficult(diff);
    }
  };

  return (
    <Box>
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
    </Box>
    // <Box>
    //   <FormControl component="fieldset">
    //     <Typography htmlFor="recipeDifficulty" shrink variant="h6">difficulty:</Typography>
    //     <RadioGroup row aria-label="difficulty" name="difficulty" value={difficult} onChange={handleChange}>
    //       <FormControlLabel value="easy" control={<Radio color="default" />} label="Easy" />
    //       <FormControlLabel value="medium" control={<Radio color="default" />} label="Medium" />
    //       <FormControlLabel value="hard" control={<Radio color="default" />} label="Hard" />
    //     </RadioGroup>
    //   </FormControl>
    //   </Box>
  );
}

export default DifficultySelector;