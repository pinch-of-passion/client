import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './item'

const CarouselImg=()=>{
    var items = [
        {
            
            description: "theh best place for hosting",
            image:"http://localhost:3600/images/454646"
        },
        {
           
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room2.jpg"
        },
        {
            
            description:"theh best place for hosting",
            image: "http://localhost:3500/images/room3.jpg"
        },
        {
           
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room4.jpg"
        },
        {
         
            description: "theh best place for hosting",
            image:"http://localhost:3500/images/room5.jpg"
        },
        {
            
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room6.jpg"
        },
        {          
            description: "theh best place for hosting",
            image: "http://localhost:3500/images/room7.jpg"
        },

    ]

    return (
        <Carousel animation='slide' duration={2500}>
            {
                items.map( (item, i) => <Item key={i} item={item} sx={{height:"100%"}}/> )
            }
        </Carousel>
    )
}

export default CarouselImg