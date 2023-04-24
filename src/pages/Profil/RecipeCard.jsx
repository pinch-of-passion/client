import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const RecipeCard = ({image,title,description}) => {
  return (<>
  
      <CardActionArea sx={{maxWidth:500,minWidth:400 }} component="a" href="/">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">{title}</Typography>
            <Typography variant="subtitle1" paragraph> {/* {description} */}
              apple best recipe
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 150, display: { xs: 'none', sm: 'block' } }}
            image={image}
          />
        </Card>
       </CardActionArea>
    </>
  )
}

export default RecipeCard