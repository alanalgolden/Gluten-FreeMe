import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const RecipeCard = ({ recipeName, description, cardPicture, rating, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" sx={{ borderRadius: "10px 10px 10px 10px" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="40px"
        justifyContent="space-between"
      >
        {/* Header Row */}
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          sx={{ borderRadius: "10px 0 0 0", pl: "20px" }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {recipeName}
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          justifyContent="right"
          sx={{ borderRadius: "0 10px 0 0", pr: "20px" }}
        >
          {icon}
        </Box>
        {/* Main Content Row 1*/}
        <Box
          gridColumn="span 12"
          gridRow="3"
          display="flex"
          alignItems="center"
          justifyContent="left"
          sx={{ pl: "20px" }}
        >
          {cardPicture}
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="2"
          display="flex"
          justifyContent="right"
          alignContent="center"
          sx={{ mr: "20px", pt: "2px" }}
        >
          <Typography variant="h4" color={colors.greenAccent[400]}>
            Falling for Fall
          </Typography>
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="120px"
        >
          Created by:
          <br /> Alana Golden
        </Box>
        <Box
          gridColumn="span 9"
          gridRow="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ pr: "20px" }}
        >
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
