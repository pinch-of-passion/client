import * as React from 'react';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { Paper, Box } from '@mui/material';

const DisplayCategories = ({ categories }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    textAlign: 'center',
                    height: 50,
                    lineHeight: '50px',
                    elevation: 6,
                },
            }}
        >
            {categories.map(category => (
                <Paper><LocalOfferRoundedIcon></LocalOfferRoundedIcon>{category}</Paper>
            ))}
        </Box>
    )
}
export default DisplayCategories



//להציג קטגוריות כCHIP
// import * as React from 'react';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

// export default function ColorChips() {
//   return (
//     <Stack spacing={1} alignItems="center">
//       <Stack direction="row" spacing={1}>
//         <Chip label="primary" color="primary" />
//         <Chip label="success" color="success" />
//       </Stack>
//       <Stack direction="row" spacing={1}>
//         <Chip label="primary" color="primary" variant="outlined" />
//         <Chip label="success" color="success" variant="outlined" />
//       </Stack>
//     </Stack>
//   );
// }


// <Chip size="small" deleteIcon={<DoneIcon />} onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} />

// <Chip size="small" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} />

// <Chip size="small" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />

