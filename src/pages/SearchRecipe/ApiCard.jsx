import { useState, React } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
const ApiCard = ({ recipe, setRefresh }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
        event.stopPropagation()
        setOpen(true);
    };

    const handleClose = (event) => {
        event.stopPropagation()
        setOpen(false);
    };

    const handleSubmission = (event) => {
        event.stopPropagation()
        //deleteRecipe(recipe.id)
        setOpen(false);
    };

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
                    //position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: '16.5rem',
                    bottom: 50,
                    backgroundColor: "#d3232f",
                    color: "#ffffff",
                    transform: 'translateY(50%)',
                }}
                onClick={(event) => { event.stopPropagation(); navigate(`/editRecipe?recipeId=${recipe.id}`) }}
            >
                <ModeEditIcon />
            </IconButton>
            <IconButton
                size="md"
                variant="solid"
                color="danger"
                sx={{
                    //position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: '11rem',
                    bottom: 50,
                    backgroundColor: "#d3232f",
                    color: "#ffffff",
                    transform: 'translateY(50%)',
                }}
                onClick={handleClickOpen}
            >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this recipe?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmission} autoFocus>
                        delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ApiCard


