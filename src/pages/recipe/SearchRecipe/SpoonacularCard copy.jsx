import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
const SpoonacularCard = ({ image }) => {

    return (
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
    )
}

export default SpoonacularCard


