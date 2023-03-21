import DisplayTags from "./DisplayTags";
import { DisplayCategories } from "./DisplayCategories";
import { DisplayIngredients } from "./DisplayIngredients";
import TimerIcon from '@mui/icons-material/Timer';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import CommentIcon from '@mui/icons-material/Comment';
import './r.css'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Box } from "@mui/system";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const FullRecipe = () => {
    // const FullRecipe=(props)=>{

    const props = {
        "id": 1,
        "name": "apple",
        "img": "url",
        "preperingTime": 30,
        "description": "the best recipe ever",
        "difficult": "hard",
        "serves": 5,
        "ingredients": [
            {
                "id": 1,
                "name": "salt",
                "img": "url",
                "recipeIngredient": {
                    "measuringUtensilId": 1,
                    "qty": 2
                }
            }
        ],
        "steps": [
            {
                "id": 1,
                "direction": "cook all",
                "number": 2,
                "recipeId": 1
            },
            {
                "id": 2,
                "direction": "mix all",
                "number": 1,
                "recipeId": 1
            }
        ],
        "comments": [
            {
                "id": 1,
                "msg": "so yummy!!!!",
                "recipeId": 1
            },
            {
                "id": 2,
                "msg": "so easy!!!!",
                "recipeId": 1
            }
        ],
        "tags": ['milk'],
        "categories": ['purin']
    }
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (<ThemeProvider theme={theme}>
        <CssBaseline />

        <Container fixed component="main" sx={{ mb: 4 }}>
            <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="left">

                    <Box >
                        <div>Recipe Name</div>
                        <div>{props.name}</div>
                        <div>Recipe Descreption</div>
                        <div>{props.description}</div>
                        <div>Recipe Img</div>
                        <img src={props.img}></img>
                        <Box sx={{
                            justifyContent: 'space-around',
                            p: 1,
                            m: 1,
                            display: 'flex', display: 'inline-flex'
                        }}>
                            <RoomServiceIcon></RoomServiceIcon>
                            <div>Recipe serves         </div>
                            <div>      {props.serves}</div>
                            <div>         &#8214; </div>

                            <TimerIcon></TimerIcon>

                            <div>{props.preperingTime}</div>
                            <div>         &#8214; </div>
                            <div>{props.difficult}</div>

                        </Box>
                        <LocalOfferRoundedIcon></LocalOfferRoundedIcon>
                        <DisplayTags tags={props.tags}></DisplayTags>
                        <DisplayCategories categories={props.categories}></DisplayCategories>
                        <DisplayIngredients ingredients={props.ingredients}></DisplayIngredients>
                        <ModeCommentIcon></ModeCommentIcon>
                    </Box>
                </Typography>

            </Paper>
        </Container>
    </ThemeProvider>

    )

}
export default FullRecipe;