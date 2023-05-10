import { Paper, Button } from '@mui/material'


function Item(props)
{
    return (
        <Paper className="carousel-image" sx={{flexFlow:"column", backgroundImage:`url(${props.item.image})` , backgroundSize:"100% 100%" }}>
            <p style={{height:"300px"}}>{props.item.description}</p>
        </Paper>
    )
}
export default Item;