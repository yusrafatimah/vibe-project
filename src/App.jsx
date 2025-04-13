import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Box margin={"0 47px"}>
        <Navbar />
        <Home />
      </Box>
    </div>
  );
}

export default App;
