import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import AddRecipe from './pages/recipe/add/AddRecipe';
import SearchSpoonacularRecipe from './pages/recipe/SearchSpoonacularRecipe'
import ShowSpoonacularRecipe from "./pages/recipe/ShowSpoonacularRecipe"
import Home from './pages/home';
import MyAccunt from './pages/Profil';
import SearchApiRecipe from "./pages/recipe/SearchApiRecipe"
import Nav from './pages/Nav';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Profil' element={<MyAccunt />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />

          <Route path='/Api/Search' element={<SearchApiRecipe />} />
          <Route path='/spoonacular/Search' element={<SearchSpoonacularRecipe />} />

          <Route path='/CreateRecipe' element={<AddRecipe />} />

          <Route path='/spoonacular/Show/:id' element={<ShowSpoonacularRecipe recipeId={883394} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
