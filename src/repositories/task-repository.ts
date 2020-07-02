import { Task } from '../interfaces';
import db from '../helpers/connection';

const readTasks = async (): Promise<Task[]> => {
    return db('tasks');
};

const createTask = async (newTask: string): Promise<void> => {
    return db('tasks').insert({
        title: newTask,
    });
};

const updateTask = async (taskId: string, newTitle: string): Promise<void> => {
    return db('tasks').where('id', parseInt(taskId, 10)).update({
        title: newTitle,
    });
};

const deleteTask = async (taskId: string): Promise<void> => {
    return db('tasks').where('id', parseInt(taskId, 10)).del();
};

export { readTasks, createTask, updateTask, deleteTask };
