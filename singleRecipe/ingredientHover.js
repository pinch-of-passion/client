import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

export default function IngredientHover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <spam variant="text" onMouseEnter={handleClick} onMouseLeave={handleClick}>{props.name}</spam>
            {/* <Typography variant='h6'onMouseEnter={handleClick} onMouseLeave={handleClick}>{props.name}</Typography> */}

            {/* <Button variant="text" onMouseEnter={handleClick} onMouseLeave={handleClick}>{props.name}</Button> */}

            <Popper id={id} open={open} anchorEl={anchorEl}>

                <Paper elevation={0}>
                    
                        {props.img}
                </Paper>
            </Popper>
        </div>
    );
}