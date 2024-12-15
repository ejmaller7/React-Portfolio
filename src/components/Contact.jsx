// Styling for Contact section
const styles = {
    container: {
      backgroundColor: "#002244",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#ffffff",
    },
    title: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "none",
      width: "100%",
    },
    textarea: {
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "none",
      width: "100%",
      height: "100px",
    },
    button: {
      backgroundColor: "#00bcd4",
      color: "#ffffff",
      fontSize: "1rem",
      padding: "0.75rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
};

// Function for Contact
const Contact = () => {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Contact Me</h1>
            <form style={styles.form}>
                <label>
                    Name:
                    <input type="text" name="name" style={styles.input} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" style={styles.input} required />
                </label>
                <label>
                    Message:
                    <textarea type="message" style={styles.textarea} required/>
                </label>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </section>
    );
};

// Exporting the Contact file
export default Contact;