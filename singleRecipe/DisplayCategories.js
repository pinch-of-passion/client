import React from 'react'
import Typography from '@mui/material/Typography';

export const DisplayCategories = ({categories}) => {
    if (categories) {
        const category = categories.map(element => {
            <Typography variant='h6'>{element.name}</Typography>

        })

        return (
            <div>{category}</div>
        )
    }
}

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

