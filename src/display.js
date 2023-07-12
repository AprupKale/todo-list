import { addEvents } from './events.js';
import checklist from './images/icons/checklist.svg';
import allImage from './images/icons/all.svg';
import todayImage from './images/icons/today.svg';
import weekImage from './images/icons/week.svg';
import importantImage from './images/icons/priority.svg';
import projectImage from './images/icons/project.svg';

function updateDisplay(projects, selectedProject) {
    updateHeader();
    updateSidebar(projects, selectedProject);
    updateContent(selectedProject);
}

function updateHeader() {
    document.querySelector('.header>img').src = checklist;
}

function updateSidebar(projects, selectedProject) {
    document.querySelector('#All>img').src = allImage;
    document.querySelector('#Today>img').src = todayImage;
    document.querySelector('#Week>img').src = weekImage;
    document.querySelector('#Important>img').src = importantImage;

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