import LabelIcon from '@mui/icons-material/Label';


import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const DisplayTags = ({ tags }) => {
    const tag = tags.map(element => {
        return <>
            <div>{element}</div>
           
        </>
    })
    return (
        <div>{tag}</div>
    )
}

export default DisplayTags




// {
//   "id": 1,
//   "name": "apple",
//   "img": "url",
//   "preperingTime": 30,
//   "description": null,
//   "difficult": "hard",
//   "serves": 5,
//   "ingredients": [
//       {
//           "id": 1,
//           "name": "salt",
//           "img": "url",
//           "recipeIngredient": {
//               "measuringUtensilId": 1,
//               "qty": 2
//           }
//       }
//   ],
//   "steps": [
//       {
//           "id": 1,
//           "direction": "cook all",
//           "number": 2,
//           "recipeId": 1
//       },
//       {
//           "id": 2,
//           "direction": "mix all",
//           "number": 1,
//           "recipeId": 1
//       }
//   ],
//   "comments": [
//       {
//           "id": 1,
//           "msg": "so yummy!!!!",
//           "recipeId": 1
//       },
//       {
//           "id": 2,
//           "msg": "so easy!!!!",
//           "recipeId": 1
//       }
//   ],
//   "tags": [],
//   "categories": []
// }