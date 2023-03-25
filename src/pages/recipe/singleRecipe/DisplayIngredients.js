import * as React from 'react';
import { Paper, Box, Tooltip } from '@mui/material';

const DisplayIngredients = ({ ingredients }) => {
    return (
        <Box>
            {ingredients.map(ingredient => (
                <div>
                    {/* <Typography variant='h6'>{`${ingredient.recipeIngredient.qty} cup`}</Typography> */}
                    <span variant='h6'>{`${ingredient.recipeIngredient.qty} cup`}</span>
                    <Tooltip
                        arrow
                        title={
                            <div>
                                {ingredient.img && <img src={ingredient.img} alt={ingredient.ingredient} />}
                                <button>dont have?</button>
                            </div>
                        }
                        enterDelay={500}
                    >
                    {/* <Typography variant='h6'>{` ${ingredient.name}`}</Typography> */}
                    <span variant='h6'>{` ${ingredient.name}`}</span>
                    </Tooltip>
                </div>
            ))}
        </Box>
    )
}
export default DisplayIngredients