import { useTheme, Typography, Paper } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PropTypes from "prop-types";
import { tokens } from "../../theme";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const MealButton = ({ meal, numberOfPeople, backgroundColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper
      className="button-meal"
      sx={{
        position: "relative",
        color: "#1b1b1b",
        aspectRatio: 1,
        border: "2px solid transparent",
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "border-box",
        borderRadius: "8px",
        alignItems: "flex-start",
        fontFamily: "Trebuchet MS, sans-serif",
        textTransform: "none",
        overflow: "hidden",
        transition: "all 0.3s ease",
        zIndex: 1,
        backgroundImage: `linear-gradient(45deg, linear-gradient(45deg, #2b6d78 0%, #49c0d0 100%),
        linear-gradient(210deg, #66eafd 0%, #18454b 100%)`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-2px",
          left: "-2px",
          width: "calc(100% + 4px)",
          height: "calc(100% + 4px)",
          borderRadius: "8px",
          opacity: 1,
          transition: "opacity 1s ease",
          zIndex: -1,
          backgroundImage: `linear-gradient(45deg, #2b6d78 0%, #49c0d0 100%),
          linear-gradient(210deg, #18454b 0%, #66eafd 100%)`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          zIndex: -2,
          transition: "background-image 1s ease",
          backgroundImage: `linear-gradient(210deg, #2b6d78 0%, #49c0d0 100%)`,
        },
        "&:hover": {
          transform: "scale(1.03)",
          cursor: "pointer",
        },
        "&:hover::before": {
          opacity: 0,
        },
        "&:active": {
          transform: "scale(0.95)",
          transition: "all 0.1s ease",
        },
      }}
    >
      <Typography
        variant="subtitle1"
        component="span"
        className="text-meal"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, 20%)",
          textAlign: "center",
          width: "100%",
          textTransform: "none",
          fontSize: "1.2em",
          fontWeight: 600,
        }}
      >
        {meal}
      </Typography>
      <PeopleAltOutlinedIcon
        sx={{ position: "absolute", bottom: 28, left: 10 }}
      />
      <Typography
        variant="body1"
        component="span"
        sx={{
          position: "absolute",
          bottom: 4,
          left: 8,
          color: "black",
          backgroundColor: backgroundColor,
          padding: "0 6px",
          borderRadius: "4px",
          borderWidth: "2px",
          borderStyle: "solid",
          fontSize: "1.1em",
          fontWeight: 600,
        }}
      >
        {numberOfPeople}
      </Typography>
    </Paper>
  );
};

MealButton.propTypes = {
  meal: PropTypes.string.isRequired,
  numberOfPeople: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

const WeeklyMealButtons = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const meals = [
    {
      name: "Monday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Tuesday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Wednesday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Thursday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Friday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Saturday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    {
      name: "Sunday",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} spacing={18}>
        {meals.map((meal, index) => (
          <Grid item xs={1} key={index}>
            <MealButton
              meal={meal.breakfast}
              numberOfPeople={4}
              backgroundColor={colors.primary[200]}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} spacing={18}>
        {meals.map((meal, index) => (
          <Grid item xs={1} key={index}>
            <MealButton
              meal={meal.lunch}
              numberOfPeople={4}
              backgroundColor={colors.primary[200]}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} spacing={18}>
        {meals.map((meal, index) => (
          <Grid item xs={1} key={index}>
            <MealButton
              meal={meal.dinner}
              numberOfPeople={4}
              backgroundColor={colors.primary[200]}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WeeklyMealButtons;
