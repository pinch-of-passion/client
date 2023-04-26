import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import AspectRatio from '@mui/joy/AspectRatio';
const SpoonacularCard = ({ image }) => {

    return (
        <>
            <AspectRatio ratio="1.75">
                <img border="none" outline="none"
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
        </>
    )
}

export default SpoonacularCard


