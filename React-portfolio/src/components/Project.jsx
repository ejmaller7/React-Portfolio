const styles = {
    card: {
      backgroundColor: "#ffffff",
      color: "#002244",
      padding: "1rem",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    title: {
      fontSize: "1.5rem",
      margin: "0 0 0.5rem 0",
    },
    description: {
      fontSize: "1rem",
    },
};

const Project = ({ title, description, imageUrl, appLink, repoLink }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={`${title} screenshot`} /> 
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
            <a href={appLink} target="_blank" rel="noopener noreferrer">
                View Deployed App
            </a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                View GitHub Repository
            </a>
        </div>
    );
};

export default Project;