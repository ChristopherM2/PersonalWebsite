import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <p>
                Hi there! You can reach me at my email address:
                <a href="mailto:math9620@mylaurier.ca"> math9620@mylaurier.ca</a>
            </p>
            <p>My phone number is <a href="tel:519-860-9972">519-860-9972</a></p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/christopher-matheson/">LinkedIn</a>
                <a href="discord://discordapp.com/users/292095595869372417">Discord</a>
                <a href="https://www.instagram.com/chris_24747/">Instagram</a>
                <a href="https://github.com/ChristopherM2">GitHub</a>
            </div>
        </div>
    );
}

export default Contact;