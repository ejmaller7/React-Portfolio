import Project from './Project';
import Image1 from '../assets/images/CalendarPicture.jpg';
import Image2 from '../assets/images/ProfessionalReadMe.png';
import Image3 from '../assets/images/VehicleBuilder.png';
import Image4 from '../assets/images/EmployeeTracker.jpg';
import Image5 from '../assets/images/OpenAIAPI.png';
import Image6 from '../assets/images/ReactPortfolio.jpeg';

// Styling for the Portfolio section
const styles = {
    container: {
        padding: "2rem",
        backgroundColor: "#002244",
        color: "#ffffff",
      },
      title: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "2rem",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      },
};

// Function for Portfolio
const Portfolio = () => {
    // Array with all of the projects that will be referenced in this portfolio - unique to their ID number
    const projects = [
        { id: 1, title: "E-Planner", description: "HTML, CSS, JavaScript", imageUrl: Image1, repoLink:"https://github.com/ejmaller7/E-Planner" },
        { id: 2, title: "Professional ReadMe Generator", description: "NodeJS, JavaScript", imageUrl: Image2, repoLink:"https://github.com/ejmaller7/Professional-README-Generator" },
        { id: 3, title: "Vehicle Builder", description: "TypeScript", imageUrl: Image3, repoLink:"https://github.com/ejmaller7/Vehicle-Builder" },
        { id: 4, title: "Employee Tracker", description: "JavaScript, SQL", imageUrl: Image4, repoLink:"https://github.com/ejmaller7/Employee-Tracker" },
        { id: 5, title: "OpenAI API", description: "TypeScript, Prompt Engineering, API", imageUrl: Image5, repoLink:"https://github.com/ejmaller7/OpenAI-API" },
        { id: 6, title: "React Portfolio", description: "MERN Stack", imageUrl: Image6, repoLink: "https://github.com/ejmaller7/React-Portfolio" },
    ];

    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Portfolio</h1>
            <div style={styles.grid}>
                {/* Function that maps through array and renders the project component for each item listed in the array */}
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

// Exports the Portfolio file
export default Portfolio;