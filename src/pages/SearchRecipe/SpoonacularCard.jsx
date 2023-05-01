import {IconButton} from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
const SpoonacularCard = ({ image }) => {

    return (
            <IconButton
                size="md"
                variant="solid"
                color="danger"
                sx={{
                    //position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: '16rem',
                    bottom: 45,
                    backgroundColor:"#d3232f",
                    color:"#ffffff",
                    transform: 'translateY(50%)',
                }}
            >
                <Favorite />
            </IconButton>
    )
}

export default SpoonacularCard


