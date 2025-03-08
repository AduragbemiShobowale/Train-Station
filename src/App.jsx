import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/contact/ContactUsPage";
import TimeTablePage from "./pages/timeTable/TimeTablePage";
import FaqPage from "./pages/FaqPage";
import Register from "./pages/Auth/register/Register";
import Login from "./pages/Auth/Login/Login";
import ForgetPassword from "./pages/Auth/Forget Password/ForgetPassword";
import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayouts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchTrain from "./pages/searchTrain/SearchTrain";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes with Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/timetable" element={<TimeTablePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/searchTrain" element={<SearchTrain />} />
          </Route>

          {/* Routes without Navbar & Footer */}
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
