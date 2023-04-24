// import React from 'react'
// import Typography from '@mui/material/Typography';
// import { Card, Box } from '@mui/material';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import TimerIcon from '@mui/icons-material/Timer';
// import RoomServiceIcon from '@mui/icons-material/RoomService';
// import ModeCommentIcon from '@mui/icons-material/ModeComment';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { height } from '@mui/system';
const RecipeCard = ({ recipe}) => {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="1.75">
          <img
            // src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            src={recipe?.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>{recipe?.title}</Typography>      
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>{recipe?.description}</Typography>
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
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          6.3k views
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          1 hour ago
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          easy
        </Typography>
      </CardOverflow>
    </Card>
  );
  //   return (<>

  //     <CardActionArea sx={{ textAlign: "center",margin:2,padding:0 }} component="a" href="/">
  //       <Card sx={{ display: 'flex',width: 500, height: 200,}}>
  //         <CardContent sx={{  flex: 1 }}>
  //           <Typography component="h2" variant="h5">{title}</Typography>
  //           <Typography variant="subtitle1" paragraph> {/* {description} */}
  //             apple best recipe
  //           </Typography>

  //           <Box sx={{
  //             justifyContent: 'space-around',
  //             display: 'flex',
  //             position:"absolute",
  //             bottom: 5,
  //           }}>
  //             <RoomServiceIcon />
  //             <div>{5} Serveings </div>
  //             <div>&#8214;</div>
  //             <TimerIcon />
  //             <div><b>{36}</b> m</div>
  //             <div>&#8214;</div>
  //             <FavoriteRoundedIcon />
  //             <div>{"easy"}</div>
  //           </Box>
  //         </CardContent>
  //         <CardMedia
  //           component="img"
  //           sx={{ width: 200, height: 200, display: { xs: 'none', sm: 'block' } }}
  //           image={image}
  //         />
  //       </Card>
  //     </CardActionArea>
  //   </>
  //   )
  // }
}
export default RecipeCard


