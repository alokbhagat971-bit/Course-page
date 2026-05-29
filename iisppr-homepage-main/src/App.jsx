import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage            from "./pages/HomePage";
import CourseDifferentPage from "./pages/CourseDifferentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                  element={<HomePage />} />
        <Route path="/course-different"  element={<CourseDifferentPage />} />
      </Routes>
    </BrowserRouter>
  );
}