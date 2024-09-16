import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { bgGradient } from "../constants/color";
import { setAuthenticated } from "../redux/reducers/authSlice";
import { validateEmail, validatePasswordStrength } from "../utils/helper";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({}); // Initialize error as an object for different field errors
  const dispatch = useDispatch();

  const validateForm = () => {
    let formErrors = {};

    // Email validation
    if (!validateEmail(username)) {
      formErrors.username = "Please enter a valid email address.";
    }

    // Password validation
    if (!validatePasswordStrength(password)) {
      formErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.";
    }

    return formErrors;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({}); // Clear previous errors
    const toastId = toast.loading("Logging in...");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors); // Set form errors
      toast.error("Please fix the errors before submitting.", { id: toastId });
      setIsLoading(false);
      return;
    }

    try {
      // Make a GET request to fetch users
      const response = await axios.get("http://localhost:5000/users");

      // Find user with matching username (email) and password
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Dispatch authentication state with a token or user data
        dispatch(setAuthenticated(`fake-token-${user.id}`)); // Assuming you use a fake token
        toast.success("Login successful", { id: toastId });
      } else {
        setError({ login: "Invalid email or password." });
        toast.error("Invalid email or password", { id: toastId });
      }
    } catch (error) {
      console.error("Login failed", error);
      setError({ login: "Something went wrong. Please try again." });
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Render error for email if it exists */}
            {error.username && (
              <Typography variant="body2" style={{ color: "red" }}>
                {error.username}
              </Typography>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Render error for password if it exists */}
            {error.password && (
              <Typography variant="body2" style={{ color: "red" }}>
                {error.password}
              </Typography>
            )}
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            {/* Render general login error if it exists */}
            {error.login && (
              <Typography variant="body2" style={{ color: "red", marginTop: "1rem" }}>
                {error.login}
              </Typography>
            )}
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
