import { tokens } from "../../theme";
import { useTheme, IconButton, Box, Typography, Fade } from "@mui/material";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarItem = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <MenuItem component={<Link to={to} icon={icon} />}> {title}</MenuItem>;
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapsed, collapseSidebar } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box display="flex">
      <Sidebar
        backgroundColor={colors.primary[400]}
        width={collapsed ? "90px !important" : undefined}
      >
        <Menu>
          <Box display="flex" alignItems="center" sx={{ m: "10px" }}>
            <IconButton onClick={() => collapseSidebar()}>
              <MenuRoundedIcon sx={{ fontSize: 24 }} />
            </IconButton>
            {!collapsed && (
              <Fade
                in={true}
                style={{
                  transitionDelay: !collapsed ? "800ms" : "0ms",
                }}
              >
                <Typography noWrap>Gluten Free Me</Typography>
              </Fade>
            )}
          </Box>
          <Box textAlign="left" display="flex" sx={{ m: "0 0 0 10px" }}>
            <MenuItem> Tools </MenuItem>

            <SidebarItem
              title="AI Test"
              to="/aitest"
              icon={<PsychologyIcon />}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
