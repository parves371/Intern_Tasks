import React from "react";
import { Box, Typography, Container } from "@mui/material";
import DynamicDataList from "../components/specific/DataList";
import Header from "../layout/Header";

function CachedData() {
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
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Dynamic API with Caching
        </Typography>

        <Box sx={{ mt: 4, width: "100%", maxWidth: 600 }}>
          {/* Fetch Users and cache with 'usersCache' */}
          <Typography variant="h5" component="h2" gutterBottom>
            Users Data
          </Typography>
          <DynamicDataList
            apiUrl="https://jsonplaceholder.typicode.com/users"
            cacheKey="usersCache"
          />

          {/* Fetch Posts and cache with 'postsCache' */}
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
            Posts Data
          </Typography>
          <DynamicDataList
            apiUrl="https://jsonplaceholder.typicode.com/posts"
            cacheKey="postsCache"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default CachedData;
