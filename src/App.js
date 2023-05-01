import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditOrCreateRecipe from './pages/recipe/EditOrCreateRecipe';
import ShowSpoonacularRecipe from "./pages/recipe/ShowSpoonacularRecipe"
import Home from './pages/home';
import Profil from './pages/Profil';
import SearchRecipe from "./pages/recipe/SearchRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profil' element={<Profil />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/Api/Search' element={<SearchRecipe src="api" />} />
          <Route path='/spoonacular/Search' element={<SearchRecipe src="spoonacular" />} />
          <Route path='/CreateRecipe' element={<EditOrCreateRecipe action="create" />} />
          <Route path='/EditRecipe' element={<EditOrCreateRecipe action="edit" />} />
          <Route path='/spoonacular/Show/:id' element={<ShowSpoonacularRecipe recipeId={883394} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
