import React from "react";

import AppLayout from "../layout/AppLayout";
import { Typography } from "@mui/material";
import InfiniteScroll from "../components/specific/InfiniteScroll";
import PostsList from "../components/specific/PostsList ";

const Home = () => {
  return (
    <section>
      <Typography
        className="flex items-center justify-center"
        fontSize={"2rem"}
      >
        Home
      </Typography>

      <InfiniteScroll />

      {/* <PostsList /> */}
    </section>
  );
};

export default AppLayout()(Home);
