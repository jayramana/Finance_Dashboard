import { Box } from "@mui/material";


const Row1 = () => {
  return (
    <>
      <Box
        className="bg-[#2d2d34] rounded-lg shadow-[0.15rem_0.2rem_0.15rem_0.1rem_rgba(0,0,0,.8)]"
        gridArea="a"
      ></Box>
      <Box
        className="bg-[#2d2d34] rounded-lg shadow-[0.15rem_0.2rem_0.15rem_0.1rem_rgba(0,0,0,.8)]"
        gridArea="b"
      ></Box>
      <Box
        className="bg-[#2d2d34] rounded-lg shadow-[0.15rem_0.2rem_0.15rem_0.1rem_rgba(0,0,0,.8)]"
        gridArea="c"
      ></Box>
    </>
  );
};

export default Row1;
