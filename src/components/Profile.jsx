import { useAuth0 } from "@auth0/auth0-react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

//TODO: Does this do anything? It seems like there are no references, and uses Auth0 rather than Firebase auth.
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    isAuthenticated && (
      <Box>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </Box>
    )
  );
};

export default Profile;
