import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import QuickAccess from "./components/QuickAccess";
import QRCodes from "./pages/QRCodes";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/quick" element={<QuickAccess />} />
          <Route path="/qrcodes" element={<QRCodes />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;