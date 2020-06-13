import { Task } from '../interfaces';

const readTasks = async (): Promise<Task[]> => {
    return [
        {
            id: 123,
            title: 'harchi'
        }
    ]
};

const createTask = async (newTask: string): Promise<void> => {
   
};

const updateTask = async (taskId: string, newTitle: string): Promise<void> => {
    
};

const deleteTask = async (taskId: string): Promise<void> => {
    
};

export { readTasks, createTask, updateTask, deleteTask };
