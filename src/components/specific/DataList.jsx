import React, { useState, useEffect } from "react";
import { Button, List, ListItem, Typography, Box } from "@mui/material";

import { fetchData, clearCache } from "../../utils/cache";

const DynamicDataList = ({ apiUrl, cacheKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(apiUrl, cacheKey);
        setData(fetchedData);
      } catch (error) {
        console.error(`Error fetching data from ${apiUrl}:`, error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [apiUrl, cacheKey]);

  const handleRefresh = async () => {
    clearCache(cacheKey); // Clear the specific cache
    setLoading(true); // Set loading to true while fetching new data
    try {
      const freshData = await fetchData(apiUrl, cacheKey);
      setData(freshData);
    } catch (error) {
      console.error(`Error refreshing data from ${apiUrl}:`, error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleRefresh}
        sx={{ mb: 2 }}
      >
        Refresh Data
      </Button>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <Typography variant="body1">
              {item.name || item.title || "No name"}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DynamicDataList;
