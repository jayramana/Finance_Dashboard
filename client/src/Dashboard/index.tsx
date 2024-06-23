import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  const gridTemplateBig = `
    "a  b  c"
    "a  b  c"
    "a  b  c"
    "a  b  f"
    "d  e  f"
    "d  e  f"
    "d  h  i"
    "g  h  i"
    "g  h  j"
    "g  h  j"
    `;
  const gridTemplateSmall = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
    `;
  const isAboveMobileScreen = useMediaQuery("(min-width:1200px)");
  return (
    <Box
      className="grid  w-[100%] h-[100%] gap-[1rem]"
      sx={
        isAboveMobileScreen
          ? {
              gridTemplateColumns: "repeat(3,minmax(350px,1fr))",
              gridTemplateRows: "repeat(10,minmax(60px,1fr))",
              gridTemplateAreas: gridTemplateBig,
            }
          : {
              gridTemplateColumns: "1fr",
              gridAutoRows: "100px",
              gridTemplateAreas: gridTemplateSmall,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
