const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task });
    saveTasks(tasks);
    console.log("Task added", task);
    
}

const listTasks = () => {
    const tasks = loadTasks();
    for(let index = 0; index < tasks.length; index++)
    {
        console.log(`${index + 1} - ${tasks[index].task}`);
        
    }
}

const removeTask = (task) => {
    const tasks = loadTasks();

    // Pop is used to just remove last element without taking any parameter. When you have to delete certain element we use Splice method.

    // tasks.pop();
    // saveTasks(tasks);
    // console.log("Task removed");

    if(task < 0 || task >= tasks.length){
        console.log("Invalid Task Index !");
        return;
        
    }
    const removedTask = tasks.splice(task, 1);

    saveTasks(tasks);

    console.log("Task removed:", removedTask[0].task);
    
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}
else if(command === "list"){
    listTasks();
}
else if(command === "remove"){
    removeTask(parseInt(argument));
}
else{
    console.log("Command not found !");
    
}