import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftFixedButtons from './LeftFixedButtons';
import Uploader from "./Uploader"
import { Button } from '@mui/material'
import { FcAddImage } from 'react-icons/fc'
// import RecipesGrid from "../recipe/recipeGrid"
import CarouselImg from './carousel'
const Home = () => {

    useEffect(() => {
    }, []);
    return (
        <>
            <CarouselImg></CarouselImg>
        </>

    )
}

export default Home


