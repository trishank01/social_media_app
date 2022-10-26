import { Box } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {

  return (
    <Box flex={4} p={2} display="flex" flexDirection="column" alignItems="center" >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
