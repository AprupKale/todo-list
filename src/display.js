import { all, today, week, important, projects } from './index.js';
import { addEvents, newProjectFormEvents, newTaskFormEvents } from './events.js';
import checklist from './images/icons/checklist.svg';
import allImage from './images/icons/all.svg';
import todayImage from './images/icons/today.svg';
import weekImage from './images/icons/week.svg';
import importantImage from './images/icons/priority.svg';
import projectImage from './images/icons/project.svg';

function updateDisplay(selectedProject) {
    updateHeader();
    updateSidebar(selectedProject);
    updateContent(selectedProject);
}

function updateHeader() {
    document.querySelector('.header>img').src = checklist;
}

function updateSidebar(selectedProject) {
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

function showNewProjectForm() {
    const newProjectForm = document.createElement('form');
    newProjectForm.innerHTML = `
        <div>
            <label for="project-name">Project Name</label>
            <input type="text" name="project-name" id="project-name" placeholder="Enter project name">
        </div>
        <button id="create">Create</button>
        <button id="cancel">Cancel</button>
    `;

    document.querySelector('.main')
        .appendChild(newProjectForm);
}

function showNewTaskForm() {
    const newTaskForm = document.createElement('form');
    newTaskForm.innerHTML = `
        <div>
            <label for="task-name">Task Name</label>
            <input type="text" name="task-name" id="task-name" placeholder="Enter task name">
        </div>
        <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" placeholder="Enter description"></textarea>
        </div>
        <div>
            <label for="due-date">Due Date</label>
            <input type="date" name="due-date" id="due-date">
        </div>
        <div class="inline">
            <label for="priority">Is important?</label>
            <input type="checkbox" name="priority" id="priority">
        </div>
        <div>
            <label for="project-select">Project to assign task to</label>
            <select name="project-select" id="project-select">
                <option value="none">None</option>
            </select>
        </div>
        <button id="create">Create</button>
        <button id="cancel">Cancel</button>
    `;

    document.querySelector('.main')
        .appendChild(newTaskForm);
}

export { updateDisplay, showNewProjectForm, showNewTaskForm };