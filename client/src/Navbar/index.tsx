import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { FaMoneyCheckDollar } from "react-icons/fa6";
const Navbar = () => {
  const { palette } = useTheme();
  const [path, setPath] = useState("dashboard");
  return (
    <div>
      <Box className="flex items-center justify-between px-[3rem] py-[1rem]">
        <div className="flex gap-[.5rem] items-center">
          <FaMoneyCheckDollar className="text-xl text-[#f1f3f5]"/>
          <p className="text-[#f1f3f5]">Finanseer</p>
        </div>
        <div className="flex gap-[1rem]">
          <Link
            to="/"
            className={`${
              path === "dashboard" ? "text-[#f1f3f5]" : "text-[#495057]"
            } transition-all duration-300`}
            onClick={() => setPath("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            to="/predict"
            className={`${
              path === "predictions" ? "text-[#f1f3f5]" : "text-[#495057]"
            } transition-all duration-300`}
            onClick={() => setPath("predictions")}
          >
            Predictions
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
