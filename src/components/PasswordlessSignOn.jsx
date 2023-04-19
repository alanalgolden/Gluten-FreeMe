import React, { useState, useEffect } from "react";
import { auth, sendSignInLinkToEmail, signInWithEmailLink } from "../firebase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../theme";
import GoogleIcon from "@mui/icons-material/Google";
import { LoginButton } from "./TopbarButtons";
import { useContext } from "react";
import { UserContext } from "../core/Providers/UserProvider";

const handleSignInWithEmailLink = async () => {
  if (auth.isSignInWithEmailLink(window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      window.localStorage.removeItem("emailForSignIn");

      console.log("Signed in successfully:", result.user);
      // Navigate to the home page or another protected route after successful sign-in
    } catch (error) {
      console.error("Error signing in with email link", error);
    }
  }
};

const PasswordlessSignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user, handleLogin } = useContext(UserContext);

  useEffect(() => {
    handleSignInWithEmailLink();
  }, []);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendSignInLink = async () => {
    try {
      const actionCodeSettings = {
        url: "http://localhost:3000", //window.location.origin, // The URL to return to after the user completes the sign-in
        handleCodeInApp: true, // Must be true for email link sign-in
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending sign-in link", error);
    }
  };

  return (
    <Grid container>
      <Grid xs={12}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3" sx={{ fontFamily: "sans-serif" }}>
            Sign-up with Email
          </Typography>
        </Box>
      </Grid>
      <Grid display="block" xs={8}>
        <Box display="flex" justifyContent="center">
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: colors.primary[600] }}
          />
        </Box>
      </Grid>
      <Grid display="block" xs={4}>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            onClick={sendSignInLink}
            sx={{
              height: "100%",
              backgroundColor: colors.greenAccent[600],
              fontFamily: "sans-serif",
            }}
          >
            Send sign-in link
          </Button>
        </Box>
      </Grid>
      <Grid display="block" xs={5}>
        <Divider />
      </Grid>
      <Grid display="flex" justifyContent="center" xs={2} sx={{ pt: "8px" }}>
        <Typography variant="h6">OR</Typography>
      </Grid>
      <Grid display="block" xs={5}>
        <Divider />
      </Grid>

      <Grid display="block" xs={12}>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={() => handleLogin()}
            sx={{
              height: "100%",
              backgroundColor: colors.greenAccent[600],
              fontFamily: "sans-serif",
            }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PasswordlessSignIn;
