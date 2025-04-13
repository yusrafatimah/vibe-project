import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { About, Home, PrivacyPolicy } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Box margin={"0 47px"}>
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
