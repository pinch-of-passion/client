import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApiCard = ({ recipe, setRefresh }) => {

    const deleteRecipe = async (recipeId) => {
        let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
        const ans = await axios.delete(`http://localhost:3600/api/recipe/${recipeId}`)
        debugger
        setRefresh(true);
        setRefresh(false);
    }
    const navigate = useNavigate();

    return (
        <>
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
                onClick={() => { navigate(`/editRecipe?recipeId=${recipe.id}`) }}
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
                onClick={() => {deleteRecipe(recipe.id) }}
            >
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default ApiCard


