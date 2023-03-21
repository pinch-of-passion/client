import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Typography, Button, Paper, Container, TextField, Box } from '@mui/material';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
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
  const [difficult, setDifficult] = useState("Easy")
  const [ingredients, setIngredients] = useState([{ qty: '', measuringUtensilId: '', ingredientId: '' }])
  const [steps, setSteps] = useState([{ number: 1, direction: '' }]);
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [img, setImg] = useState("url")

  const [err, setErr] = useState(null);

  // const navigate = useNavigate()

  const handleAddRecipe = async () => {
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
    debugger;
  }
  const aaa = async (e) => {
    debugger;
  }


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
          <DifficultySelector difficult={difficult} setDifficult={setDifficult}></DifficultySelector>
          <AddIngridient ingredients={ingredients} setIngredients={setIngredients}></AddIngridient>
          <AddSteps setSteps={setSteps} steps={steps}></AddSteps>
          <ChooseCategories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}></ChooseCategories>
          <ChooseTags selectedTags={selectedTags} setSelectedTags={setSelectedTags}></ChooseTags>
          <Button variant="contained" component="label">
            Upload img
            <input hidden accept="image/*" multiple type="file" onChange={(e)=>{aaa(e)}} />
          </Button>
          <br></br>
          <Button onClick={handleAddRecipe}>add recipe</Button>
        </Paper>
      </Container>
    </Box>
  )
}

export default AddRecipe













