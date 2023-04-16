import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
};

export default Dashboard;
