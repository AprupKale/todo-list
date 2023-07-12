function Task(title, description, dueDate, priority) {
    let completed = false;

    function getTitle() {
        return title;
    }

    function getDescription() {
        return description;
    }

    function getDueDate() {
        return dueDate;
    }

    function getPriority() {
        return priority;
    }

    function setTitle(_title) {
        title = _title;
    }

    function setDescription(_description) {
        description = _description;
    }

    function setDueDate(_dueDate) {
        dueDate = _dueDate;
    }

    function setPriority(_priority) {
        priority = _priority;
    }

    function isCompleted() {
        return completed;
    }

    function toggleCompleted() {
        completed = completed
            ? false
            : true;
    }

    function equals(task) {
        title === task.title
            && description === task.description
            && dueDate === task.dueDate
            && priority === task.priority;
    }

    return {
        getTitle, getDescription, getDueDate, getPriority,
        setTitle, setDescription, setDueDate, setPriority,
        equals, isCompleted, toggleCompleted
    };
}

export { Task };