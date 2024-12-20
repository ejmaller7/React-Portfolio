import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Styling for the Footer content
const styles = {
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#002244",
      color: "#fff",
    },
    icon: {
      margin: "0 1rem",
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s",
    },
};

// Function for the Footer
const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/* Links to GitHub, LinkedIn & Twitter using Icons that were imported above */}
            <a
                href="https://github.com/ejmaller7"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/ethan-maller/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
                href="https://x.com/ejmaller7"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </footer>
    );
}

// Exporting the Footer file
export default Footer;