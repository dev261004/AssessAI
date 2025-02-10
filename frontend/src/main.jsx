import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  </BrowserRouter>
)
