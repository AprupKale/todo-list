function Project(name) {
    let tasks = [];

    function getName() {
        return name;
    }

    function getTasks() {
        return tasks;
    }

    function addTask(task) {
        tasks.push(task);
    }

    function removeTask(task) {
        tasks.filter(t => task.equals(t));
    }

    return { getName, getTasks, addTask, removeTask };
}

export { Project };