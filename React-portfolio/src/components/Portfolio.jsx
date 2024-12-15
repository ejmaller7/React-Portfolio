import Project from './Project';

const styles = {
    container: {
      padding: "2rem",
      color: "#ffffff",
      backgroundColor: "#002244",
    },
    title: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    projectList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1rem",
    },
};

const Portfolio = () => {
    const projects = [
        { id: 1, title: "Project 1", description: "Description 1", imageUrl:"./image", appLink:"link", repoLink:"githublink" },
        { id: 2, title: "Project 2", description: "Description 2", imageUrl:"./image", appLink:"link", repoLink:"githublink" },
        { id: 3, title: "Project 3", description: "Description 3", imageUrl:"./image", appLink:"link", repoLink:"githublink" },
        { id: 4, title: "Project 4", description: "Description 4", imageUrl:"./image", appLink:"link", repoLink:"githublink" },
    ];

    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Portfolio</h1>
            <div style={styles.projectList}>
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;