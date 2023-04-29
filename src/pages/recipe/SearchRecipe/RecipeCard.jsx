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
                minWidth: "320px", maxWidth: "320px", m: 2, borderWidth: 0,
                '&:hover': { boxShadow: '6px 6px 2px 1px rgba(189, 104, 109, .2)' },
            }}>
            <CardOverflow>
                <AspectRatio ratio="1.75">
                    <img border="none" outline="none"
                        src={recipe.image}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                {src == "api" ? <ApiCard /> : <SpoonacularCard />}
            </CardOverflow>
            <div style={{ height: 120 }}>
                <Typography level="h4" sx={{ fontSize: '32', mt: 2, fontWeight: '10' }}>
                    {src == "api" ? recipe.name : recipe?.title}
                </Typography>
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
                    {src == "api" ? <span>&#128507; {recipe.difficult}</span> : <span>&#128077; {recipe.aggregateLikes} likes</span>}
                </Typography>
            </CardOverflow>
        </Card>
    );

}
export default RecipeCard