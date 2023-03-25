import * as React from 'react';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { Paper, Box } from '@mui/material';

const DisplayTags = ({ tags }) => {
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
            {tags.map(tag => (
                <Paper><LocalOfferRoundedIcon></LocalOfferRoundedIcon>  {tag}</Paper>
            ))}
        </Box>
    )
}

export default DisplayTags