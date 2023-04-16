import { useTheme, Box } from "@mui/material";
import { useContext } from "react";
import { tokens } from "../../theme";
import { UserContext } from "../../core/Providers/UserProvider";
import Grid from "@mui/material/Unstable_Grid2";

import WeeklyMealButtons from "./mealButtons";

const CreateMealPlan = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2}>
          <Grid md={12}>
            <Box
              width="1080px"
              sx={{
                backgroundColor: "transparent",
                mt: "50px",
              }}
            >
              <WeeklyMealButtons />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateMealPlan;
