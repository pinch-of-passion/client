import { Button } from '@mui/material'
import React from 'react'
import { FcAddImage } from 'react-icons/fc'

function Image({ recipe, setRecipe }) {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setRecipe({ ...recipe, img: selectedFile });
        const formData = new FormData();
        formData.append("image", selectedFile);
    };

    return (<>
        {!(recipe.img) ?
            <Button component="label">
                <FcAddImage style={{ fontSize: 50 }} />
                <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}
                />
            </Button>
            :
            <div>
                <img
                    src={URL.createObjectURL(recipe.img)}
                    alt={`Uploaded image`}
                    style={{ width: "40%" }}
                />
                <button onClick={() => { setRecipe({ ...recipe, img: null }) }}>replace</button>
            </div>
        }
    </>
    )
}

export default Image