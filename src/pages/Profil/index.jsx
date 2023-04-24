import * as React from 'react';
import {Tab,Box,Paper,TextField,InputAdornment} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import MyRecipies from './MyRecipes'
import SharedRecipes from './SharedRecipes';

function Profil() {
  const [value, setValue] = React.useState('MyRecipies');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',mt:"5px" }}>
      <div>
        <Paper elevation={0}
          sx={{
            textAlign: 'center',
            fontSize: 60,
            backgroundColor: "#a8e39f",
            mb:"40px"
          }}
        >Favorites
          <div>
            <TextField
            sx={{
              width:"35%",
              borderRadius: "300px",
              borderColor:"#609159"
              }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Paper>
      </div>
      <TabContext value={value}>
        <Box >
          <TabList
            centered
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab value="MyRecipies" label="My Recipies" />
            <Tab value="SharedRecipes" label="Shared Recipes" />
          </TabList>
        </Box>
        <TabPanel value="MyRecipies"><MyRecipies /></TabPanel>
        <TabPanel value="SharedRecipes"><SharedRecipes /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default Profil