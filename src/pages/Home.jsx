import React from "react";

import AppLayout from "../layout/AppLayout";
import { Typography } from "@mui/material";
import InfiniteScroll from "../components/specific/InfiniteScroll";

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
    </section>
  );
};

export default AppLayout()(Home);
