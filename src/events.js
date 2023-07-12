import { updateDisplay } from './display.js';
import { all, today, week, important, projects } from './index.js'

function addEvents() {
    document.querySelectorAll('div.division')
        .forEach(ele => ele.addEventListener('click', e => {
            if (e.target.id === 'All') {
                updateDisplay(projects, all);
            } else if (e.target.id === 'Today') {
                updateDisplay(projects, today);
            } else if (e.target.id === 'Week') {
                updateDisplay(projects, week);
            } else if (e.target.id === 'Important') {
                updateDisplay(projects, important);
            } else {
                for (let i = 0; i < projects.length; i++) {
                    if (e.target.id === projects[i].getName()) updateDisplay(projects, projects[i]);
                }
            }
        }))
}

export { addEvents };