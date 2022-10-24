import { Box, Stack } from "@mui/system";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";
import SideBar from "./components/Sidebar";


function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="center">
        <RightBar/>
        <Feed/>
        <SideBar/>
      </Stack>
    </Box>
  );
}

export default App;
