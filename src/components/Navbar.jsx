import { Link } from 'react-router-dom';

// Styling for the Navbar content
const styles = {
    navbar: {
      backgroundColor: "#002244",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    navList: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      gap: "2rem",
    },
    navItem: {
      margin: 0,
      padding: 0,
    },
    navLink: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "#00bcd4",
    },
};

// Function for the Navbar
const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    {/* Link used from React-Router-Dom to change the pathway to the new section that is clicked */}
                    <Link to="/" style={styles.navLink}>AboutMe</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/portfolio" style={styles.navLink}>Portfolio</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>Contact</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/resume" style={styles.navLink}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

// Exporting the Navbar file
export default Navbar;