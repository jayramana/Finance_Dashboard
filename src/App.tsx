import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./Theme.ts";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar/index.tsx";
import Dashboard from "./Dashboard/index.tsx";
import Test from "./Test.tsx";
function App() {
  // const [count, setCount] = useState(0);
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="mb-[1rem]">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
        <Navbar />
        <Box className="h-screen mx-[1rem] ">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/predict" element={<Test />}></Route>
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
