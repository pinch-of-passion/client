import axios from "axios"
import { useEffect, useState } from "react"
import { Typography, Button, Paper, Container, TextField, Box } from '@mui/material';
import { LoadingButton, ToggleButton, ToggleButtonGroup } from '@mui/lab';
import { FcAddImage } from "react-icons/fc";
import AddIngridient from "./AddIngredients";
import ChooseCategories from "./ChooseCategories";
import ChooseTags from "./ChooseTags"
import AddSteps from "./AddSteps"
import DifficultySelector from './DifficultySelector'
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { Form } from "react-router-dom";
import { borderRadius } from "@mui/system";




const AddRecipe = () => {


  useEffect(() => { })
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [preperingTime, setPreperingTime] = useState()
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" align="center" margin={10}>create a new recipe</Typography>
      {!img?
      <Button  size="large" component="label">
              
            <FcAddImage />
            <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}
            />
          </Button>
          :
          <div>
            <img
              src={URL.createObjectURL(img)}
              alt={`Uploaded image`}
              style={{ width:"40%" }}
            />
        </div>}
      <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 }, width: { xs: "95%", sm: "80%", md: "60%" } }}>
        <Typography  variant="h6">recipe name</Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
          required
          size="small"
          InputProps={{
            style: {
              borderRadius: 15,
              marginBottom: 25,
              // width: '80%',
              width:"800px"
            },
          }}
        />
        <Typography htmlFor="recipeDescription" shrink variant="h6">Description about your recipe</Typography>
        <TextField
          id="recipeDescription"
          multiline
          rows={5}
          size="small"
          InputProps={{
            style: {
              borderRadius: 15,
              width: '800px',
              marginBottom: 25
            },
          }}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" style={{ width: '150px' }}>serves</Typography>
            <TextField
              style={{ marginLeft: '10px' }}
              variant="outlined"
              size="small"
              type="number"
              InputProps={{
                inputProps: { min: 1 },
                style: {
                  // borderRadius: 15,
                  width: '100px',
                },
              }}
              onChange={(e) => { setServes(e.target.value) }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" style={{ width: '150px' }}>Prepering Time </Typography>
            <TextField
              style={{ marginLeft: '10px' }}
              variant="outlined"
              size="small"
              type="number"
              InputProps={{
                inputProps: { min: 1 },
                style: {
                  // borderRadius: 15,
                  width: '100px',
                },
              }}
              onChange={(e) => { setPreperingTime(e.target.value) }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" style={{ width: '150px' }}>difficult </Typography>
            <DifficultySelector difficult={difficult} setDifficult={setDifficult} />
          </div>
        </div>
      </Paper>
      <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 }, width: { xs: "95%", sm: "80%", md: "60%" } }}>
        <AddIngridient ingredients={ingredients} setIngredients={setIngredients} />
      </Paper>

      <Paper elevation={16} sx={{ my: { xs: 6, md: 6 }, p: { xs: 6, md: 3 }, width: { xs: "95%", sm: "80%", md: "60%" } }}>
        <AddSteps setSteps={setSteps} steps={steps} />
      </Paper>
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


    </div>
  )
}

export default AddRecipe