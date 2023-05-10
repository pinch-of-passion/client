import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftFixedButtons from './LeftFixedButtons';
import Uploader from "./Uploader"
import { Button } from '@mui/material'
import { FcAddImage } from 'react-icons/fc'
// import RecipesGrid from "../recipe/recipeGrid"
import CarouselImg from './carousel'
const Home = () => {
  const [picture, setPicture] = useState("")
  const [file, setFile] = useState("")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile)
    setPicture(URL.createObjectURL(selectedFile));
};


 const uploadImg=() => {
    if(file){
        const formData = new FormData()
        formData.append("file", file)
        axios.post("http://localhost:3600/api/upload",formData).then(({data})=>{
           if(data?.name){
             debugger
            setPicture(`http://localhost:3600/images/${data.name}`)
           }
        }).catch(err=>{
            console.log("error")
        })
    }
  }

  useEffect(() => {
  }, []);
  return (<>
     {!(picture) ?
            <Button component="label">
                <FcAddImage style={{ fontSize: 50 }} />
                <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}
                />
            </Button>
            :
            <div>
                <img
                    src={(picture)}
                    alt={`Uploaded image`}
                    style={{ width: "40%" }}
                />
                <button onClick={() => { setPicture(null) }}>replace</button>
            </div>
        }
        <CarouselImg></CarouselImg>
        <button onClick={uploadImg}>add</button>
    {/* <Uploader file={picture} setFile={setPicture} /> */}
  </>

  )
}

export default Home


