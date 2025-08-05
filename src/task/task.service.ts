import { Injectable, NotFoundException } from "@nestjs/common";



@Injectable()
export class TasksService {

    private tasks: any = [];


    getTask(id: number) {
        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            return new NotFoundException('Task not found');
        }
        return task;
    }

    getTasks() {

        return this.tasks;
    }

    createTask(task: any) {
        console.log("Creating task:", task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1 // simple ID generation
        });
        return "Task created";
    }

    updateTask() {
        return "Task updated";
    }

    deleteTask() {
        return "Task deleted";
    }

    updateTaskPartially() {
        return "Task partially updated";
    }

}