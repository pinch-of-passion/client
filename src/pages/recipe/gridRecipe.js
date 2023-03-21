import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

function GridRecipe({image,title,description}) {

  return (
   <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">{title}</Typography>
            <Typography variant="subtitle1" paragraph> {/* {description} */}
              aaaaaaaaaaaaa aaaaaaaa
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={image}
          />
        </Card>
      </CardActionArea>
    
  );
}

export default GridRecipe;