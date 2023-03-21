import DisplayTags from "./DisplayTags";
import React, { useState, useEffect } from 'react';
import { DisplayCategories } from "./DisplayCategories";
import DisplayIngredients from "./DisplayIngredients";
import TimerIcon from '@mui/icons-material/Timer';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import './r.css'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Box } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


const theme = createTheme();

const FullRecipe = ({ recipeId }) => {
    const [Recipe, setRecipe] = useState({})
    useEffect(() => {

        async function fetchData() {
            const data = await axios.get(`http://localhost:3600/api/recipe/${recipeId}`)
            if (data.data) {
                debugger;
                setRecipe(data.data);

            }
        }
        fetchData()
    }, []);



    return (<ThemeProvider theme={theme}>
        <CssBaseline />
        <Container fixed component="main" sx={{ mb: 4 }}>
            <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Box >
                        <Typography variant='h3'>{Recipe.name}</Typography>
                        <Typography variant='h6'>{Recipe.description}</Typography>
                        <img src="https://picsum.photos/900/400"></img>
                        <Box sx={{
                            justifyContent: 'space-around',
                            p: 1,
                            m: 1,
                            display: 'flex'
                        }}>
                            <RoomServiceIcon></RoomServiceIcon>
                            <div> serves         </div>
                            <div>      {Recipe.serves}</div>
                            <div>         &#8214; </div>

                            <TimerIcon></TimerIcon>

                            <div>{Recipe.preperingTime}</div>
                            <div>         &#8214; </div>
                            <div>{Recipe.difficult}</div>

                        </Box>
                        <LocalOfferRoundedIcon></LocalOfferRoundedIcon>
                        <DisplayTags tags={Recipe.tags}></DisplayTags>
                        <DisplayCategories categories={Recipe.categories}></DisplayCategories>
                        <DisplayIngredients ingredients={Recipe.ingredients}></DisplayIngredients>
                        <ModeCommentIcon></ModeCommentIcon>
                    </Box>

            </Paper>
        </Container>
    </ThemeProvider>

    )

}
export default FullRecipe;