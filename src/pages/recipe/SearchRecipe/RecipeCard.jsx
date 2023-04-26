import * as React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import axios from "axios"
import ApiCard from './ApiCard';
import SpoonacularCard from './SpoonacularCard copy';

const RecipeCard = ({ recipe, src ,setRecipes}) => {

    return (
        <Card onClick={()=>alert("card clicked")} variant="outlined" 
        sx={{ width: "300px", m: 2,
            '&:hover': { boxShadow: '6px 6px 2px 1px rgba(189, 104, 109, .2)', borderColor: 'neutral.outlinedHoverBorder' },
          }}>
            <CardOverflow>
                {src == "api" ? <ApiCard image={recipe.img} /> : <SpoonacularCard image={recipe.img} />}
            </CardOverflow>
            <div  style={{ height: 120 }}>
                <Typography level="h2" sx={{ fontSize: '32', mt: 2, fontWeight: '20' }}>{recipe?.name}</Typography>
                {/* <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', maxHeight: '3.6em' }}>
                    <Typography level="h6" sx={{ mt: 0.5, mb: 2, fontWeight: '20' }}>{recipe?.description}</Typography>
                </div> */}
                <Typography noWrap level="h6" sx={{ mt: 0.5, mb: 2, fontWeight: '20', }}>{recipe?.description}</Typography>
            </div>
            <Divider />
            <CardOverflow
                variant="soft"
                sx={{
                    display: 'flex',
                    gap: 1.5,
                    py: 1.5,
                    px: 'var(--Card-padding)',
                    bgcolor: 'background.level1',
                }}
            >
                <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
                    {recipe.preperingTime} minutes
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
                    {recipe.serves} servings
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
                    {src == "api" ? recipe.difficult : `${recipe.aggregateLikes} loves`}
                </Typography>
            </CardOverflow>
        </Card>
    );

}
export default RecipeCard