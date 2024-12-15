import Navbar from './Navbar';
import Image from '../assets/images/EJMLogo.png';

// Styling for the Header content
const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#002244",
      color: "#ffffff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    logo: {
      width: "auto",
      height: "50px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
};

// Function for the Header
const Header = () => {
    return (
        <header style={styles.header}>
        <div style={styles.logoContainer}>
            <img src={Image} alt="EJM Logo" style={styles.logo} />
            <h1 style={styles.title}>Ethan J. Maller</h1>
        </div>
            {/* Importing the Navbar file into the header */}
            <Navbar />
        </header>
    )
}

// Exporting the Header file
export default Header;