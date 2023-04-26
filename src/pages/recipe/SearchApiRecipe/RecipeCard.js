import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { height } from '@mui/system';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';

const RecipeCard = ({ recipe}) => {
  return (
    <Card variant="outlined" sx={{ width: "350px" ,m:5}}>
      <CardOverflow>
        <AspectRatio ratio="1.75">
          <img   border="none"  outline="none"
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            // src={recipe?.img}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <div style={{height:120}}>
      <Typography level="h2" sx={{ fontSize: '32', mt: 2,fontWeight: '20' }}>{recipe?.name}</Typography>      
      <Typography level="h6" sx={{mt: 0.5, mb: 2,fontWeight: '20' }}>{recipe?.description}</Typography>
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
          {recipe.difficult}
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
          {recipe.preperingTime} minutes
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body1" sx={{ fontWeight: '20', color: 'text.secondary' }}>
          {recipe.serves} servings
        </Typography>
      </CardOverflow>
    </Card>
  );
  
}
export default RecipeCard

    
       
    