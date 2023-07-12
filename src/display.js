import { addEvents } from './events.js';
import projectImage from './images/icons/project.svg';

function updateDisplay(projects, selectedProject) {
    updateSidebar(projects, selectedProject);
    updateContent(selectedProject);
}

function updateSidebar(projects, selectedProject) {
    document.querySelector('#All').className = 'division';
    document.querySelector('#Today').className = 'division';
    document.querySelector('#Week').className = 'division';
    document.querySelector('#Important').className = 'division';

    const projectSidebar = document.querySelector('.projects');
    projectSidebar.innerHTML = '<h2>Projects<h2>';

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        const projectDivision = document.createElement('div');
        projectDivision.className = 'division';
        projectDivision.id = project.getName();

        const image = document.createElement('img');
        image.src = projectImage;
        const heading = document.createElement('h3');
        heading.textContent = project.getName();

        projectDivision.appendChild(image);
        projectDivision.appendChild(heading);

        projectSidebar.appendChild(projectDivision);
    }

    document.querySelector(`#${selectedProject.getName()}`).className = 'division selected';
    addEvents();
}

function updateContent(selectedProject) {
    
}

export { updateDisplay };