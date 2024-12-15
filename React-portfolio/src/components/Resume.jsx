const styles = {
    container: {
      backgroundColor: "#002244",
      color: "#ffffff",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    text: {
      fontSize: "1.2rem",
      marginBottom: "1.5rem",
    },
    link: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#00bcd4",
      textDecoration: "none",
      border: "2px solid #00bcd4",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
    },
    linkHover: {
      backgroundColor: "#00bcd4",
      color: "#002244",
    },
};

const Resume = () => {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Resume</h1>
            <p style={styles.text}>Click the link below to view or download my resume:</p>
            <a href=".../assets/resume/Ethan Maller Resume 2025.pdf" target="_blank" rel="noopener noreferrer" download="My_Resume.pdf" style={styles.link}>
                View/Download Resume
            </a>
        </section>
    );
};

export default Resume;