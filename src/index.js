import './style.css';
import { Project } from './project.js';
import { Task } from './task.js';
import { updateDisplay, showNewProjectForm, showNewTaskForm } from './display.js';
import { addEvents, newProjectFormEvents, newTaskFormEvents } from './events.js';

let all = Project('All');
let today = Project('Today')
let week = Project('Week');
let important = Project('Important');
let projects = [Project('Home'), Project('School'), Project('Work')];

updateDisplay(all);
addEvents();

function addProject() {
    showNewProjectForm();
    newProjectFormEvents();
}

function addTask() {
    showNewTaskForm();
    newTaskFormEvents();
}

export {
    all, today, week, important, projects,
    addProject, addTask
};