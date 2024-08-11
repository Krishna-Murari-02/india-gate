import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home";
import Register from "./routes/Register";
import Otp from "./routes/otp";
import Thankyou from "./routes/thank-you";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
          <Route path="thank-you" element={<Thankyou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;