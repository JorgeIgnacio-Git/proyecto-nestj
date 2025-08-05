import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiOperation } from "@nestjs/swagger";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService: TasksService) { }

    @Get() // obtiene todas las tareas
    @ApiOperation({ summary: 'obtiene todas las tareas.' })
    getAllTasks(@Query() query: any) {
        console.log("Query parameters:", query);
        return this.taskService.getTasks();
    }

    @Get(':id') // obtiene una tarea por ID
    getTask(@Param('id') id: string) {
        console.log("Getting task with ID:", id);
        return this.taskService.getTask(parseInt(id));
    }


    @Post() // crea una tarea
    createTask(@Body() task: CreateTaskDto) {
        return this.taskService.createTask(task);
    }

    @Put() // actualiza completamente
    updateTask() {
        return this.taskService.updateTask();
    }

    @Delete() // elimina completamente
    deleteTask() {
        return this.taskService.deleteTask();
    }

    @Patch() // actualiza parcialmente
    patchTask() {
        return this.taskService.updateTaskPartially();
    }


}