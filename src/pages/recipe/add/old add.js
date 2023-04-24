import axios from "axios"
import { useEffect, useState } from "react"
import { Typography, Button, Paper, Container, TextField, Box } from '@mui/material';
import { LoadingButton, ToggleButton, ToggleButtonGroup } from '@mui/lab';

import AddIngridient from "./AddIngredients";
import ChooseCategories from "./ChooseCategories";
import ChooseTags from "./ChooseTags"
import AddSteps from "./AddSteps"
import DifficultySelector from './DifficultySelector'
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { Form } from "react-router-dom";


 

const AddRecipe = () => {


  useEffect(() => { })
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [preperingTime, setPreperingTime] = useState("")
  const [serves, setServes] = useState("")
  const [difficult, setDifficult] = useState("easy")
  const [ingredients, setIngredients] = useState([{ qty: 0, measuringUtensilId: '', ingredientId: '', meta: '' }])
  const [steps, setSteps] = useState([{ number: 1, direction: '' }]);
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate()

  const handleAddRecipe = async () => {
    setLoading(true);
    
    const newRrecipe = {
      name,
      img,
      preperingTime,
      description,
      difficult,
      serves,
      steps,
      ingredients,
      tags: selectedTags,
      categories: selectedCategories
    };

    let config = { headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") } }
    const recipe = await axios.post("http://localhost:3600/api/recipe", newRrecipe, config)
    debugger
    setLoading(false)
    alert("added")
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImg(selectedFile);
    const formData = new FormData();
    formData.append("image", selectedFile);
  };

  return (
    <> 
        <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 } ,width:{ xs: "95%", sm: "80%", md: "70%" }}}>
          <Typography variant="h1" align="left">add recipe</Typography>
          <Typography htmlFor="recipeName" shrink variant="h6">recipe name</Typography>
          <TextField
            id="recipeName"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Typography htmlFor="recipeDescription" shrink variant="h6">Description about your recipe</Typography>
          <TextField
            id="recipeDescription"
            multiline
            rows={5}
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Typography htmlFor="preperingTime" shrink variant="h6">Prepering Time</Typography>
          <TextField
            id="preperingTime"
            label="min"
            type="number"
            variant="standard"
            onChange={(e) => { setPreperingTime(e.target.value) }}
          />
          <Typography htmlFor="serves" shrink variant="h6">serves</Typography>
          <TextField
            id="serves"
            type="number"
            variant="standard"
            onChange={(e) => { setServes(e.target.value) }}
          />
          <DifficultySelector difficult={difficult} setDifficult={setDifficult} />
          <AddIngridient ingredients={ingredients} setIngredients={setIngredients} />
          <AddSteps setSteps={setSteps} steps={steps} />
          <ChooseCategories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
          <ChooseTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          
          <LoadingButton
            size="large"
            onClick={handleAddRecipe}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            type="submit"
          >
            <span>add recipe</span>
          </LoadingButton>
          <Button variant="outlined" component="label">
            Upload img
            <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}
            />
          </Button>
          <div>{img && (
            <img
              src={URL.createObjectURL(img)}
              alt={`Uploaded image`}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          )}</div>
        </Paper>    

    </>
  )
}

export default AddRecipe