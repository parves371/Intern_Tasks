import React from "react";
import { Container, Box, Typography } from "@mui/material";
import UserList from "../components/specific/UserList";
import Header from "../layout/Header";

function Hook() {
  return (
    <Container>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Custom Hook Example
        </Typography>
        <UserList />
      </Box>
    </Container>
  );
}

export default Hook;
