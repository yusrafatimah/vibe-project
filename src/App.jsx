import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import {
  About,
  Home,
  PrivacyPolicy,
  Login,
  Signup,Community,
  ChooseYourQuiz,
  MembershipPlan,TakeQuiz,
} from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<ChooseYourQuiz />} />
          <Route path="/plans" element={<MembershipPlan />} />
          <Route path="/takeQuiz" element={<TakeQuiz />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
