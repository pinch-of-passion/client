import { Paper, Box, Tooltip } from '@mui/material';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DisplayIngredients = ({ ingredients, id }) => {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = React.useState("");
    const [current2, setCurrent2] = React.useState([]);

    const handleClickOpen = async (ingredient) => {
        const ans = await axios.get(`https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredient}&apiKey=0504f698616c4f9ea9fbaf8db69ccd8d`)
        if (ans.data.status == "success") {
            setCurrent(ans.data.ingredient)
            setCurrent2(ans.data.substitutes)
            setOpen(true);
        }
        else {
            setCurrent(ans.data.message)
            setCurrent2([])
            setOpen(true);
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            {ingredients.map(ingredient => (
                <div>
                    <Typography component="span" align="left">{`${ingredient.amount} ${ingredient.unit}`}</Typography>
                    <Tooltip
                        title={
                            <div>
                                <div><img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} /></div>
                                <button onClick={() => { handleClickOpen(ingredient.originalName) }}>dont have?</button>
                            </div>
                        }
                    >
                        <Typography component="span" align="left">{` ${ingredient.originalName}`}</Typography>
                    </Tooltip>
                </div>
            ))}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{current}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {current2}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
export default DisplayIngredients