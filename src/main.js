const { Task, TaskManager} = require('./taskManager.js');
const readline = require('readline');

console.log("---------- TASK MANAGER ----------");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
        resolve(answer);
        });
    });
}

async function optionStatus(){
    let status;
    console.log("Task status:");
    console.log("1 - To do");
    console.log("2 - In progress");
    console.log("3 - Done");
    const opStatus = await questionAsync("Option: ");
    if (opStatus === "1"){
        status = "To do";
    } else if(opStatus === "2"){
        status = "In progress";
    } else{
        status = "Done";
    }
    return status
}

let flag = true
const tasks = new TaskManager() 

async function chooseOption() {
    const option = await questionAsync("Choose an option: ");
    console.log("----------------------------------");

    switch (option) {
        case "1":
            const id = tasks._tasks.length + 1;
            const name = await questionAsync("Task name: ");
            const status = await optionStatus();
            const task = new Task(id, name, status);
            tasks.addTask(task);
            console.log("----------------------------------");
            console.log("Task added!");
            console.log("----------------------------------");

            break;
        case "2":
            if(tasks._tasks.length !== 0){
                console.log("------------ All tasks------------");
                tasks.showTasks();
            } else{
                console.log("You don't have any tasks yet")
            }
            console.log("----------------------------------");

            break;
        case "3":
            const _id = await questionAsync("Task ID: ")
            const _status = await optionStatus()
            tasks.updateTaskStatus(parseInt(_id), _status);
            console.log("----------------------------------");

            break;
        case "4":
            const idToDelete = await questionAsync("Task ID: ");
            tasks.removeTask(parseInt(idToDelete));
            console.log("----------------------------------");
            console.log("Task deleted!");
            console.log("----------------------------------");

            break;
        case "5":
            console.log("You left! Bye!");
            console.log("----------------------------------");
            
            return false
        default:
            console.log("Invalid option.");
            console.log("----------------------------------");

            break;
    }
    return true;
}

async function main() {
    while (flag) {
      console.log("1 - Add task;");
      console.log("2 - See all tasks;");
      console.log("3 - Update status;");
      console.log("4 - Delete task;");
      console.log("5 - Exit;");
  
      console.log("---------------------------------")
      flag = await chooseOption();
    }
    rl.close()
  }
  
  main();
  