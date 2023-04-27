import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ApiCard = ({ image }) => {

    return (
        <>
            <IconButton onClick={(event)=>{event.preventDefault(); alert("clicked edit");event.preventDefault();}}
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
                <ModeEditIcon />
            </IconButton>
            <IconButton
                size="md"
                variant="solid"
                color="danger"
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    right: '4rem',
                    bottom: 0,
                    transform: 'translateY(50%)',
                }}
            >
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default ApiCard


