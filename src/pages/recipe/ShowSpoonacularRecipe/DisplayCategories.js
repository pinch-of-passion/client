import * as React from 'react';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { Paper, Box } from '@mui/material';
const typesArray =
 ["main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink"
]

const DisplayCategories = ({ categories }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    textAlign: 'center',
                    height: 50,
                    lineHeight: '50px',
                    elevation: 6,
                },
            }}
        >
            {categories.map(category => ( 
            //     {
            //     if(typesArray.index(category)!=-1)
            // }
                <Paper><LocalOfferRoundedIcon></LocalOfferRoundedIcon>{category}</Paper>
            ))}
        </Box>      
    )
}
export default DisplayCategories
