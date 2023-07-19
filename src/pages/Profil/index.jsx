import * as React from "react";
import {
  Tab,
  Box,
  Paper,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import MyRecipies from "./MyRecipes";
import SharedRecipes from "./SharedRecipes";

function Profil() {
  const [curentTab, setCurentTab] = React.useState("MyRecipies");

  return (
    <Box sx={{ width: "100%", typography: "body1", mt: "5px" }}>
      {/* <Paper elevation={0}
          sx={{
            textAlign: 'center',
            fontSize: 60,
            backgroundColor: "#f9c8d9",
            mb: "40px"
          }}
        >
          <Typography sx={{ fontSize: 60 }}>Favorites</Typography>
          <div>
            
          </div>
        </Paper> */}
      <TabContext value={curentTab}>
        <Box>
          <TabList
            centered
            onChange={(event, newValue) => {
              setCurentTab(newValue);
            }}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab value="MyRecipies" label="My Recipies" />
            <Tab value="SharedRecipes" label="Shared Recipes" />
          </TabList>
        </Box>
        <TabPanel value="MyRecipies">
          <MyRecipies />
        </TabPanel>
        <TabPanel value="SharedRecipes">
          <SharedRecipes />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Profil;
