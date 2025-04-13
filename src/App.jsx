import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { About, Home, PrivacyPolicy, Signup } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
