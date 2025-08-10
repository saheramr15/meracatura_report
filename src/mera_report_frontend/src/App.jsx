import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import ReportFormPage from "./components/pages/Report_Submission_Page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/report_submission_page" element={< ReportFormPage />} />
    </Routes>
  );
}
