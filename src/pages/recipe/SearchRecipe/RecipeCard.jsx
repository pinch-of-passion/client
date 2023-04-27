import * as React from 'react';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import axios from "axios"
import ApiCard from './ApiCard';
import SpoonacularCard from './SpoonacularCard copy';
import AspectRatio from '@mui/joy/AspectRatio';

const RecipeCard = ({ recipe, src, setRecipes }) => {

    return (
        <Card onClick={() => alert("card clicked")} variant="outlined"
            sx={{
                minWidth: "320px", m: 3, borderWidth: 0,
                '&:hover': { boxShadow: '6px 6px 2px 1px rgba(189, 104, 109, .2)' },
            }}>
            <CardOverflow>
                <AspectRatio ratio="1.75">
                    <img border="none" outline="none"
                        // src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        src="https://spoonacular.com/recipeImages/883394-556x370.jpg"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                {src == "api" ? <ApiCard/> : <SpoonacularCard />}
            </CardOverflow>
            <div style={{ height: 120 }}>
                <Typography level="h2" sx={{ fontSize: '32', mt: 2, fontWeight: '10' }}>{recipe?.name}</Typography>
                {/* <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', maxHeight: '3.6em' }}>
                    <Typography level="h6" sx={{ mt: 0.5, mb: 2, fontWeight: '20' }}>{recipe?.description}</Typography>
                </div> */}
                <Typography level="h6" sx={{ mt: 0.5, mb: 2, fontWeight: '20', }}>{recipe?.description}</Typography>
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
                    &#9201; {recipe.preperingTime} minutes
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
                    &#127860; {recipe.serves} servings
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
                   {src == "api" ?  <span>&#128507; {recipe.difficult}</span>:<span>&#128077; {recipe.aggregateLikes} likes</span>}
                </Typography>
            </CardOverflow>
        </Card>
    );

}
export default RecipeCard