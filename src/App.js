import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditOrCreateRecipe from './pages/EditOrCreateRecipe';
import Home from './pages/home';
import Profil from './pages/Profil';
import SearchRecipe from "./pages/SearchRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Nav from './components/Nav';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthContextProvider } from "./context/authContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#cd5c5c',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <ThemeProvider theme={theme}>
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
            </Routes>
          </ThemeProvider>
        </Router>
      </AuthContextProvider>

    </div>
  );
}

export default App;
