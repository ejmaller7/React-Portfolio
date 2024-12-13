import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
    return (
    <>
        <div>
            <main>
                <Header />
                <AboutMe />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </div>
    </>
    );
}