import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Mentorship from "./components/Mentorship";
import CollaborativeWorkspace from "./components/CollaborativeWorkspace";
import IdeaEvaluation from "./components/IdeaEvaluation";
import ProgramOverview from "./components/ProgramOverview";
import Resources from "./components/Resources";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ApplicationProcess from "./components/ApplicationProcess";
import { AuthProvider } from "./AuthContext";
import Footer from "./components/Footer";
import Templates from "./components/Templates";

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/aboutUs" element={<AboutUs />} exact />
            <Route path="/application" element={<ApplicationProcess />} exact />
            <Route path="/contactUs" element={<ContactUs />} exact />
            <Route path="/mentorship" element={<Mentorship />} exact />
            <Route path="/collaborativeWorkspace" element={<CollaborativeWorkspace />} exact />
            <Route path="/ideaEvaluationTool" element={<IdeaEvaluation />} exact />
            <Route path="/programOverview" element={<ProgramOverview />} exact />
            <Route path="/resources" element={<Resources />} exact />
            <Route path='/profile' element={<Profile />} exact />
            <Route path='/templates' element={<Templates />} exact />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
