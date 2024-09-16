import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { fetchPosts } from "../../utils/helper";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 10);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePosts();
  }, [page]);

  const observer = useRef();

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <Box
      sx={{
        overflowY: "scroll",
        maxHeight: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Your Feed
      </Typography>
      <List>
        {posts.map((post, index) => (
          <div key={index}>
            <ListItem
              ref={posts.length === index + 1 ? lastPostElementRef : null}
              sx={{
                p: 2,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body1">{post.body}</Typography>
              </Box>
            </ListItem>
            {index < posts.length - 1 && <Divider />}
          </div>
        ))}
      </List>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default InfiniteScroll;
