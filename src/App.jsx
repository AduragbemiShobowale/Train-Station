import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/contact/ContactUsPage";
import TimeTablePage from "./pages/timeTable/TimeTablePage";
import FaqPage from "./pages/faq/FaqPage";
import Register from "./pages/Auth/register/Register";
import Login from "./pages/Auth/Login/Login";
import ForgetPassword from "./pages/Auth/Forget Password/ForgetPassword";
import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayouts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchTrain from "./pages/searchTrain/SearchTrain";
import BookingForm from "./pages/booking/BookingForm";
import { SelectedTrainProvider } from "./contexts/SelectedTrainContext";
import Ticket from "./pages/ticket/Ticket";
function App() {
  return (
    <>
      <SelectedTrainProvider>
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
              <Route path="/booking" element={<BookingForm />} />
<<<<<<< HEAD
              <Route path="/ticket" element={<Ticket />} />
=======
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
>>>>>>> 41403cba30e9aba1185f5ab7de9f091332fc20f2
            </Route>

            {/* Routes without Navbar & Footer */}
            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
            </Route>

            {/* Error Page for undefined routes */}
            <Route path="*" element={<PageError />} />
          </Routes>
        </Router>
      </SelectedTrainProvider>
    </>
  );
}

export default App;
