import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Styling for the Project content
const styles = {
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  imageContainer: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  content: {
    padding: "1rem",
    textAlign: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "1.5rem",
    color: "#002244",
    margin: 0,
  },
  iconLink: {
    color: "#333333",
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
  },
  icon: {
    cursor: "pointer",
  },
  iconLinkHover: {
    color: "#00bcd4",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "#555555",
  },
};

// Function for Project
// Uses deconstructuring from the props to populate the content below
const Project = ({ title, description, imageUrl, repoLink }) => {
    return (
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img src={imageUrl} alt={`${title} screenshot`} style={styles.image} />
          </div>
          <div style={styles.content}>
            <div style={styles.titleContainer}>
            <h2 style={styles.title}>{title}</h2>
            <a href={repoLink} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FontAwesomeIcon icon={faGithub} style={styles.icon} />
            </a>
          </div>
            <p style={styles.description}>{description}</p>
          </div>
        </div>
    );
};

// Exporting the Project file
export default Project;