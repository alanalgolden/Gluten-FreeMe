import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";

import Header from "../../components/header";
import RecipeCard from "../../components/RecipeCard";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  var pic = "../../assets/pumpkinpie.png";
};

export default Dashboard;
