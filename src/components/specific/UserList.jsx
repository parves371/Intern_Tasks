// src/components/UserList.js

import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import useFetch from "../../hooks/useFetchHook";

const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Users List
      </Typography>
      <List>
        {data.map((user) => (
          <ListItem
            key={user.id}
            sx={{ borderBottom: "1px solid", borderColor: "divider" }}
          >
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;
