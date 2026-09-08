function manage() {

    console.log("Welcome To My Task Manager");
    const enter = require(`readline-sync`);

    const cmd = `
    //-    help                   list of all commands
    //-    add                    add a new task
    //-    list                   list of all Tasks
    //-    complete               make status completed
    //-    reject                 make status rejected
    //-    completed              list all completed tasks
    //-    rejected               list all rejected tasks
    //-    remove                 remove Task from task list
    //-    exit                   exit from the task manager  
    `
    console.log("This Is Task Managers Commands");
    console.log(cmd);

    let myTask = [{ id: 1, task: "first Task ", status: "pending", priority: "high"}]

    while (true) {

        const startCmd = enter.question("Enter Command : ").toLowerCase().trim();

        if (startCmd == "add") {

            let addNewTask = enter.question("enter your new task : ").toLowerCase().trim();

            myTask.push({ id: myTask.length + 1, task : addNewTask, status: "pending", priority: "high"});

            console.log("your task successfully added");
        }

        else if (startCmd == "help") {
            console.log(cmd);
        }

        else if (startCmd == "list") {
            console.log(myTask);
        }

        else if (startCmd == "remove") {
            const clear = Number(enter.question("enter id : "));
            const find = myTask.findIndex((cls) => cls.id === clear);
            if (find !== -1) {
                myTask.splice(find, 1);
                console.log(` id ${clear} removed`);
                myTask.slice(find).forEach(task => task.id--)
            } else {
                console.log("invalid  id");
            }
        }

        else if (startCmd == "complete") {
            const statuses = Number(enter.question("enter id : "));
            const result = myTask.find((res) => res.id === statuses);

            if (result) {
                result.status = "completed";
            } else {
                console.log("invalid  id");
            }
        }

        else if (startCmd == "reject") {
            const rejectTask = Number(enter.question("enter  id : "));
            const rejectIndex = myTask.find((rej) => rej.id === rejectTask);

            if (rejectIndex) {
                rejectIndex.status = "rejected";
            } else {
                console.log("invalid  id");
            }
        }

        else if (startCmd == "completed") {
           const completedFilter = myTask.filter((comp) => comp.status === 'completed');
            console.log(completedFilter);
        }
        else if (startCmd == "rejected") {
            const rejtask = myTask.filter((rejtk) => rejtk.status === "rejected");
            console.log(rejtask);
        }

        else if (startCmd == "exit") {
            break;
        }
        else{
            console.log(`'${startCmd}' is not a task manager command. see 'help' `)
        }
    }
}

manage();

