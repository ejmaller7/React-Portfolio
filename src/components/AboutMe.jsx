import Image from '../assets/images/Resume Picture.jpeg'

// Styling for About Me section
const styles = {
    container: {
      backgroundColor: "#002244",
      color: "#ffffff",
      padding: "2rem",
      textAlign: "center",
      borderRadius: "8px",
      maxWidth: "800px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
    },
    image: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #00bcd4",
      marginBottom: "1rem",
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      textAlign: "justify",
      maxWidth: "600px",
    },
};

// Function for About Me
const AboutMe = () => {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>About Me</h1>
            <div style={styles.content}>
                <img src={Image} alt="Resume Picture" style={styles.image} />
                <p style={styles.text}>
                    My name is Ethan Maller and I am a college graduate from the University of Texas at San Antonio.
                    I graduated with a degree in Finance after 4 years and sought to further my education by pursuing a
                    different aspect of my interests in the form of Software Development. In doing so, I have learned 
                    software development at a basic and intermediate level and continue to hone my skills as time progresses.
                    At the moment, I am employed in an IT Software Specialist role at a company called WoundLocal in Boerne, Texas.
                    This position allows me to pursue my interest of entering the technology field where I can further grow
                    and develop as I continue my path to becoming a software developer.
                </p>
                <p style={styles.text}>
                    In the future, I plan on going back to school to get an MBA in Finance so I can eventually run my own business
                    effectively or contribute to a company I am already a part of. My desire is to be in management where in the future
                    I can share the knowledge I have accumulated over my schooling and career with my peers and employees. Beyond my
                    professional career, I seek to live a full and purposeful life where I am able to live happily with my
                    family and instill good values in my children. Along with this, I want to create an environment that
                    is nurturing and healthy for my family. Lastly, a fun fact about me is that I can play the Hotel California guitar
                    solo behind my neck.
                </p>
            </div>
        </section>
    );
};

// Exporting the AboutMe file
export default AboutMe;