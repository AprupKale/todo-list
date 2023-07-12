import './style.css';
import { Project } from './project.js';
import { Task } from './task.js';
import { updateDisplay } from './display.js';
import { addEvents } from './events.js';

let all = Project('All');
let today = Project('Today')
let week = Project('Week');
let important = Project('Important');
let projects = [Project('Home'), Project('School'), Project('Work')];

updateDisplay(projects, all);
addEvents();

export { all, today, week, important, projects };