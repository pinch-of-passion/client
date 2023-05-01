// import * as React from 'react';
// import {Typography,Divider,Box} from '@mui/material';
// import Profile from './Profile'

// const DisplayComment = ({  }) => {
//     return (
// <>
//     <Box>

//       <Box 
//         sx={{ width: 400, maxWidth: '100%', gap: 1.5 ,}}
//       >
//         <div  sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
//        <Profile></Profile>
//         <Typography fontSize="lg" fontWeight="md">
//           Headline
//         </Typography>
//         </div>
//         <Divider />
//         <Box >
//           <Typography level="body2">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry standard dummy text ever
//             since the 1500s
//           </Typography>

//         </Box>
//       </Box>
//     </Box>
//     </>
//     )
// }

// export default DisplayComment;




import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// let commentList = [{ "msg": "jkl", "date": "987" }, { "msg": "jkl", "date": "987" }]


const DisplayComment = ({commentList}) => {



    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <ListItem>
                <ListItemText primary={commentList.length} secondary="Comments" />
            </ListItem>


            {commentList.map((comment) => (<>
                <Divider component="li" />
                <li>
                    <Typography
                        sx={{ mt: 0.5, ml: 2 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                    </Typography>
                </li>

                <li>   <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ModeCommentIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={comment.msg} secondary={comment.date} />
                </ListItem>

                </li>
                <Divider component="li" variant="inset" />
            </>))}



        </List>
    );
}
export default DisplayComment;