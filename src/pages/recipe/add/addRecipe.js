import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Typography, Button, Paper, Container, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
import Box from '@mui/material/Box';

import AddIngridient from "./AddIngredients";
import ChooseCategories from "./ChooseCategories";
import ChooseTags from "./ChooseTags"
import DifficultySelector from "./DifficultySelector"
import AddSteps from "./AddSteps"

const AddRecipe = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [preperingTime, setPreperingTime] = useState("")
  const [serves, setServes] = useState("")
  const [difficult, setDifficult] = useState("easy")
  const [ingredients, setIngredients] = useState([{ qty: '', measuringUtensilId: '', ingredientId: '' }])
  const [steps, setSteps] = useState([{ number: 1, direction: '' }]);
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [img, setImg] = useState(null)

  const [err, setErr] = useState(null);
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
  }

  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0];
    setImg(selectedFile);

    const formData = new FormData();
    formData.append("image", selectedFile);
    // fetch("/upload", {
    //   method: "POST",
    //   body: formData,
    // })
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 5, width: '30ch' } }}
    >
      <Container fixed component="main" sx={{ mb: 6 }}>
        <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 } }}>
          <Typography variant="h1" align="left">add recipe</Typography>
          <Typography htmlFor="recipeName" shrink variant="h6">recipe name</Typography>
          <TextField
            id="recipeName"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
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
          <Button variant="outlined" component="label">
            Upload img
            <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}
            />
          </Button>
          {img && (
            <img
              src={URL.createObjectURL(img)}
              alt={`Uploaded image`}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          )}
          <LoadingButton
            size="large"
            onClick={handleAddRecipe}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
          >
            <span>add recipe</span>
          </LoadingButton>
        </Paper>
      </Container>
    </Box>
  )
}

export default AddRecipe