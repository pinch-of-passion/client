import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import SignIn from "./SignIn/SignIn";
import Register from "./register/Register";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsXCircleFill } from "react-icons/bs";
import { Popover } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { autocompleteClasses } from "@mui/material";
// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

const Login = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,

    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button id='lgnBtn' variant="contained" color="secondary" onClick={handleOpen}>Sign In / Log In</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 0 }}>
                        <div className="main">
                            <input type="checkbox" id="chk" aria-hidden="true"></input>
                            <SignIn></SignIn>
                            <Register></Register>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}







export default Login;