import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    margin: theme.spacing(1),
  },
  button: {
    position: 'relative',
    zIndex: 1,
    animation: '$circle 1.5s',
    animationTimingFunction: 'linear',
  },
  '@keyframes circle': {
    '0%': {
      transform: 'rotate(0deg) translateX(0px) rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg) translateX(0px) rotate(-360deg)',
    },
  },
  heart: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    animation: '$fly 2s',
  },
  '@keyframes fly': {
    '0%': {
      transform: 'translate(-50%, -50%)',
      opacity: 1,
    },
    '50%': {
      transform: 'translate(-50%, -150%)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'translate(-50%, -200%)',
      opacity: 0,
    },
  },
}));

function LoveButton() {
  const classes = useStyles();
  const [heartColorIndex, setHeartColorIndex] = useState(0);
  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const newHearts = [...hearts];
    for (let i = 0; i < 3; i++) {
      newHearts.push({ key: Math.random(), color: 'red' });
    }
    setHearts(newHearts);
    setHeartColorIndex((heartColorIndex + 1) % 3);
  };

  const heartColors = ['red', 'pink', 'purple'];

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={
          <FavoriteIcon
            style={{ color: heartColors[heartColorIndex] }}
          />
        }
        className={classes.button}
        onClick={handleClick}
      >
        Love
      </Button>
      {hearts.map((heart) => (
        <FavoriteIcon
          key={heart.key}
          className={classes.heart}
          style={{ color: heart.color }}
        />
      ))}
    </div>
  );
}

export default LoveButton;

