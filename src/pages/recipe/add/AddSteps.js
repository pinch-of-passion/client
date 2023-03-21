import React, { useState } from 'react';
import Box from '@mui/system/Box';
import { IconButton, Alert, TextField, FormGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

const AddSteps = ({ steps, setSteps }) => {

    const [alert, setAlert] = useState("");

    const addStep = () => {
        if (!steps[steps.length - 1].direction)
            setAlert("Please enter step");
        else
            setSteps([...steps, { number: steps.length + 1, direction: '' }]);
    }

    const deleteStep = (stepNumberToDelete) => {
        if (steps.length === 1)
            setSteps([{ number: 1, direction: '' }]);
        else
            setSteps(steps.filter(s => s.number !== stepNumberToDelete).map((step, index) => ({ ...step, number: index + 1, })));
    }

    return (
        <Box>
            <Typography htmlFor="recipesteps" shrink variant="h6">steps:</Typography>
            {steps.map((step, index) => {
                return (
                    <FormGroup row key={index}>
                        <TextField
                            value={step.direction}
                            key={step.number}
                            label={`step ${step.number}`}
                            variant="standard"
                            multiline
                            rows={2}
                            onChange={(event) => {
                                if (alert) setAlert("")
                                const values = [...steps];
                                values[step.number - 1].direction = event.target.value;
                                setSteps(values);
                            }}
                        ></TextField>
                        <IconButton aria-label="delete" size="small"><DeleteIcon  onClick={() => deleteStep(step.number)} /></IconButton>
                    </FormGroup>
                )
            })}
            <IconButton aria-label="add" size="large"><AddIcon fontSize="large" onClick={addStep} /></IconButton>
            {alert && <Alert sx={{ width: "50ch" }} severity="error">{alert}</Alert>}
        </Box>
    );
}

export default AddSteps;




