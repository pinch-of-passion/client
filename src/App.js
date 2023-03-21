import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import AddRecipe from './pages/recipe/add/addRecipe';
import Login from './pages/login/index.jsx';
import Header from './pages/about us/AboutUs';
import Home from './pages/home';
function App() {
  return (
    // <div >Hello</div>
    <div className="App">
      <Router>
        <nav className='main-nav'>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/aboutUs">about us </NavLink>          */}
          <NavLink to="/recipe/new">add recipe </NavLink>
          <NavLink><Login/> </NavLink>

        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/aboutUs' element={<AboutUs />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/recipe/new' element={<AddRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
