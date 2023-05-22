import { IconButton } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
const SpoonacularCard = () => {

    return (
        <IconButton
            size="md"
            variant="solid"
            color="danger"
            sx={{
                zIndex: 2,
                borderRadius: '50%',
                left: '16rem',
                bottom: 45,
                backgroundColor: '#ba8786',
                color: "#ffffff",
                transform: 'translateY(50%)',
                ":hover": {
                    backgroundColor: "#6f6f6f"
                }
            }}
        >
            <Favorite />
        </IconButton>
    )
}

export default SpoonacularCard