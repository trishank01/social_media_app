import { createTheme, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";
import SideBar from "./components/Sidebar";

function App() {
  const [mode , setMode] = useState('light')
  const darkTheme = createTheme({
    palette : {
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={'text.primary'}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="center">
        <SideBar getmode={setMode} mode={mode}/>
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
    );
}

export default App;
