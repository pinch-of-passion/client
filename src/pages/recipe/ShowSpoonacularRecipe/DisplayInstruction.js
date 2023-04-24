import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

const DisplayInstruction = ({ recipeId }) => {

    const [steps, setSteps] = useState([])
    useEffect(() => {
        async function fetchData() {

            const ans = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=85ec678e141e4c7fa978fcf568051373`)
            if (ans.data) {
                setSteps(ans.data);
            }
        }
        fetchData()
    }, []);


    return (
        <><Box sx={{
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'center',
            boxShadow: 1,
            borderRadius: 2,
            backgroundColor:red[50],
            maxWidth: 1200,
            margin: 5,
            padding: 2
        }}>





            {steps.map((step, ind) => {
                console.log(steps);

                return <Root key={ind}>
      <Typography variant="h4" gutterBottom>
        {step.name}
      </Typography>


                    {step.steps.map((stepPresent, index) => {

                        return <  >   <Divider key={index} textAlign="left">      <Avatar sx={{ width: 24, height: 24 }}
                        >
                            {stepPresent.number}</Avatar></Divider>
                            <Typography>{stepPresent.step}</Typography>
                        </>
                    })}


                </Root>
            })}
            </Box>
        </>
    )
}

export default DisplayInstruction;


