import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
    const projects = [
        { id: 1, name: "This Website", description: "GitHub Repo for the source code of this website, look at gh-pages branch for the compiled version.", link:"https://github.com/ChristopherM2/PersonalWebsite" },
        { id: 2, name: "Student Mark Database Report", description: "Vba project in excel that utilizes pivot tables and charts to create a report based on data in a sql database.", link:"https://github.com/ChristopherM2/StudentMarksDatabase" },
        { id: 3, name: "Study Motivation Website", description: "An application with the goal of encouraging individuals to work on projects or study for school to level up a shared town hall with friends.", link:"https://github.com/ChristopherM2/Study-Motivation-Website" },
        { id: 4, name: "Tic Tac Toe Bot", description: "A TicTacToe bot which should guarantee a win or tie.", link:"https://github.com/ChristopherM2/TicTacToeBot" },
        { id: 4, name: "Discord Farmer Bot", description: "This was a Discord bot created by my friends Raha, Aidan, Gurkarman and I! It's an idle farming game where your crops grow over time, you are able to get money from selling in which you can purchase upgrades to increase your profit. This project was done for Hawk Hacks 2024 and won \"Best Use of MongoDB Atlas\" :)\n" , link:"https://github.com/ChristopherM2/Hawkhacks24" },
    ];

    return (
        <>
            <h1>Projects</h1>
            <p>Hello There! Please check out my projects listed below:</p>
            <ul className="projects-list">
                {projects.map(project => (
                    <li key={project.id} className="project-item">
                        <Link to={project.link} className="project-link">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Projects;