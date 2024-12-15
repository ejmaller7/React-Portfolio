import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import "./assets/styles/global.css";

// Function for App
const App = () => {
    return (
    // Responseible for handling navigation in a React single-page application
    <Router>
        {/* Renders the Header at the top of every page */}
        <Header />
        <main>
            {/* Container for all defined routes */}
            <Routes>
                {/* Specifying the URL path for this route which if matched provides the element and renders that element */}
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </main>
        {/* Renders the footer at the bottom of every page */}
        <Footer />
    </Router>
    );
}

// Exports the App file to be used and rendered in main.jsx
export default App;