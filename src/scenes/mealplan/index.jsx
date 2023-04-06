import {
  useTheme,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../theme";
import { UserContext } from "../../core/Providers/UserProvider";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
                  <Box sx={{ ml: "10px" }}>
                    <Typography
                      variant="h6"
                      sx={{ color: colors.greenAccent[400] }}
                    >
                      Wednesday, 4/12
                    </Typography>
                    <Typography sx={{ ml: "10px" }}>
                      • Take 2LBs of Ground Beef out of the Freezer in the
                      morning.
                    </Typography>
                  </Box>
                </Item>
              </Box>
            </Box>
          </Grid>
          <Grid md={9}>
            <Box
              display="flex"
              alignItems="center"
              width="800px"
              height="100px"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "50px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Item>
                <Typography variant="h2" sx={{ ml: "10px" }}>
                  Recipe Name
                </Typography>
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
                    <Typography variant="h3">Preperation</Typography>
                    <Divider sx={{ mt: "10px" }} />
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
                        • Carrots <br />• Potatoes <br />• Chicken <br />•
                        Chicken Base
                      </Item>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Spices
                        </Typography>
                      </Item>
                      <Box sx={{ backgroundColor: colors.primary[800] }}>
                        <Item>
                          • Salt <br />• Pepper <br />• Garlic Powder
                          <br />• Onion Powder
                        </Item>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MealPLan;
