import {
  useTheme,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../theme";
import { UserContext } from "../../core/Providers/UserProvider";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
const MealPLan = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);

  const [expanded, setExpanded] = useState(false);
  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2}>
          <Grid md={3}>
            <Box
              width="250px"
              sx={{
                backgroundColor: "transparent",
                mt: "50px",
              }}
            >
              <Box
                height="50px"
                display="flex"
                justifyContent="center"
                sx={{
                  backgroundColor: colors.primary[500],
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <Item display="flex" alignItems="center" sx={{ mt: "10px" }}>
                  <Typography variant="h4">Weekly Navigator</Typography>
                  <Box sx={{ ml: "25px" }}>
                    <IconButton>
                      <CalendarMonthIcon />
                    </IconButton>
                  </Box>
                </Item>
              </Box>
              <Box
                sx={{
                  backgroundColor: colors.primary[500],
                  pb: "20px",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Item>
                  {/* SUNDAY */}
                  <Accordion
                    defaultExpanded="true"
                    expanded={expanded === "panel1"}
                    onChange={handleAccordion("panel1")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Sunday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/9
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: colors.primary[700] }}
                    >
                      <Item>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography textAlign="left">Meal 1</Typography>
                          <IconButton>
                            <ChevronRightIcon />
                          </IconButton>
                        </Box>
                        <Typography>
                          A delicious breakfast that is sure to get your day
                          started right.
                        </Typography>
                      </Item>
                      <Divider />
                      <Item
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography textAlign="left">Meal 2</Typography>
                        <IconButton>
                          <ChevronRightIcon />
                        </IconButton>
                      </Item>
                      <Divider />
                      <Item
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography textAlign="left">Meal 3</Typography>
                        <IconButton>
                          <ChevronRightIcon />
                        </IconButton>
                      </Item>
                    </AccordionDetails>
                  </Accordion>

                  {/* MONDAY */}
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleAccordion("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Monday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/10
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus
                        feugiat lectus, varius pulvinar diam eros in elit.
                        Pellentesque convallis laoreet laoreet.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* TUESDAY */}
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleAccordion("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Tuesday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/11
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* WEDNESDAY */}
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleAccordion("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Wednesday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/12
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* THURSDAY */}
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleAccordion("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Thursday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/13
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* FRIDAY */}
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleAccordion("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6bh-content"
                      id="panel6bh-header"
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Friday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/14
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* SATURDAY */}
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleAccordion("panel7")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7bh-content"
                      id="panel7bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Saturday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/15
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: colors.primary[400],
                      }}
                    >
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Item>
              </Box>
              <Box
                width="250px"
                sx={{
                  backgroundColor: colors.primary[500],
                  mt: "25px",
                  borderRadius: "10px 10px 10px 10px",
                }}
              >
                <Item>
                  <Typography
                    display="flex"
                    justifyContent="center"
                    variant="h5"
                    sx={{ fontWeight: 600 }}
                  >
                    Reminders
                  </Typography>
                </Item>
                <Item
                  sx={{
                    backgroundColor: colors.primary[600],
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box sx={{ width: "75%", ml: "10px" }}>
                      <Typography
                        variant="h6"
                        sx={{ color: colors.greenAccent[400], fontWeight: 600 }}
                      >
                        Wednesday, 4/12
                      </Typography>
                      <Typography>
                        • Take 2LBs of Ground Beef out of the Freezer in the
                        morning.
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <EventAvailableOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              </Box>
            </Box>
          </Grid>
          <Grid md={9}>
            <Box
              width="800px"
              height="100px"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "50px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: "20px" }}
                >
                  <Typography variant="h2" sx={{ ml: "10px" }}>
                    Recipe Name
                  </Typography>
                  <Box sx={{ mr: "10px" }}>
                    <IconButton>
                      <AddIcon sx={{ fontSize: "28px" }} />
                    </IconButton>
                    <IconButton>
                      <RefreshIcon sx={{ fontSize: "28px" }} />
                    </IconButton>

                    <IconButton>
                      <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
            </Box>
            <Box
              width="800px"
              height="auto"
              sx={{
                backgroundColor: colors.primary[600],
                borderRadius: "0 0 10px 10px",
              }}
            >
              <Item>
                <Grid container columns={{ md: 12 }} spacing={2}>
                  <Grid md={9}>
                    <Typography variant="h3">Preparation</Typography>
                    <Divider sx={{ mt: "10px" }} />
                    <Box sx={{ m: "20px 0 20px 0" }}>
                      <Typography fontSize="18px">
                        1. This is an example step for the recipes. <br />
                        1. This is an example step for the recipes. <br /> 1.
                        This is an example step for the recipes. <br /> 1. This
                        is an example step for the recipes. <br /> 1. This is an
                        example step for the recipes. <br />
                        1. This is an example step for the recipes. <br />
                        1. This is an example step for the recipes. <br /> 1.
                        This is an example step for the recipes.
                      </Typography>
                    </Box>
                    <Typography variant="h3">Recipe Instructions</Typography>
                    <Divider sx={{ mt: "10px" }} />
                    <Box sx={{ m: "20px 0 20px 0" }}>
                      <Typography fontSize="18px">
                        1. This is an example step for the recipes. <br />
                        1. This is an example step for the recipes. <br /> 1.
                        This is an example step for the recipes. <br /> 1. This
                        is an example step for the recipes. <br /> 1. This is an
                        example step for the recipes. <br />
                        1. This is an example step for the recipes. <br />
                        1. This is an example step for the recipes. <br /> 1.
                        This is an example step for the recipes.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={3}>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                        borderRadius: "10px 10px 0 0",
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Ingredients
                        </Typography>
                      </Item>
                    </Box>
                    <Box sx={{ backgroundColor: colors.primary[800] }}>
                      <Item>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Carrots <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Potatoes <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Chicken <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Celery <br />
                          </Typography>
                        </Box>
                      </Item>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                        borderRadius: "0 0 20px 20px",
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Spices
                        </Typography>
                      </Item>
                      <Box
                        sx={{
                          backgroundColor: colors.primary[800],
                          borderRadius: "0 0 20px 20px",
                        }}
                      >
                        <Item>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Salt <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Pepper <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Onion Powder <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Garlic Powder <br />
                            </Typography>
                          </Box>
                        </Item>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      sx={{ mt: "25px" }}
                    >
                      <Item>
                        <Button
                          sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: "white",
                            borderRadius: "20px",
                            p: "6px 25px 6px 25px",
                            textAlign: "center",

                            fontWeight: 600,
                          }}
                        >
                          Add Side Dish +
                        </Button>
                      </Item>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      sx={{ mt: "10px" }}
                    >
                      <Item>
                        <Button
                          sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: "white",
                            borderRadius: "20px",
                            p: "6px 25px 6px 25px",
                            textAlign: "center",

                            fontWeight: 600,
                          }}
                        >
                          Video Guide
                        </Button>
                      </Item>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Box>
            <Box
              sx={{
                backgroundColor: colors.primary[500],
                mt: "25px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Item>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: colors.primary[500],
                    ml: "10px",
                    mt: "10px",
                  }}
                >
                  <Typography variant="h3">Grocery List</Typography>
                  <Box display="flex" alignItems="center">
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[700],
                        color: "white",
                        borderRadius: "20px",
                        p: "6px 25px 6px 25px",
                        textAlign: "center",
                        mr: "10px",
                        fontWeight: 600,
                      }}
                    >
                      Order on Amazon Fresh
                    </Button>
                    <ShoppingBasketIcon sx={{ mr: "10px", fontSize: "28px" }} />
                  </Box>
                </Box>
                <Divider sx={{ mt: "10px", mb: "10px" }} />
                <Box
                  sx={{
                    backgroundColor: colors.primary[600],
                    mt: "20px",
                    mb: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container columns={{ md: 12 }} spacing={2}>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MealPLan;
