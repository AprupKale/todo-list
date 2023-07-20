import {
  updateDisplay,
  showNewProjectForm,
  showNewTaskForm,
} from "./display.js";
import {
  all,
  today,
  week,
  important,
  projects,
  addProject,
  addTask,
} from "./index.js";

function addEvents() {
  document.querySelectorAll("div.division").forEach((ele) =>
    ele.addEventListener("click", (e) => {
      if (e.target.id === "All") {
        updateDisplay(all);
      } else if (e.target.id === "Today") {
        updateDisplay(today);
      } else if (e.target.id === "Week") {
        updateDisplay(week);
      } else if (e.target.id === "Important") {
        updateDisplay(important);
      } else {
        for (let i = 0; i < projects.length; i++) {
          if (e.target.id === projects[i].getName()) updateDisplay(projects[i]);
        }
      }
    }),
  );
}

function newProjectFormEvents() {}

function newTaskFormEvents() {}

export { addEvents, newProjectFormEvents, newTaskFormEvents };
