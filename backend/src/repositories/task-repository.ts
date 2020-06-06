import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interfaces';

// could replace this part later with DB and add model layer or ORM
import {
	readData,
	createData,
	updateData,
	deleteData
} from '../helpers/persist-data';
import responseCodes from '../response-codes';
import { errorResponse } from '../helpers/error-response';

const readTasks = async (): Promise<Task[]> => {
	return await readData()
		.catch(errorResponse(responseCodes.READ_TASK_FAILED_IN_MODEL));
};

const createTask = async (newTask: string): Promise<Task> => {
	const newTaskObject = {
		id: uuidv4(),
		title: newTask
	};

	await createData(newTaskObject)
		.catch(errorResponse(responseCodes.CREATE_TASK_FAILED_IN_MODEL));

	return newTaskObject;
};

const updateTask = async (taskId: string, newTitle: string): Promise<Task> => {
	const updatedTaskObject = {
		id: taskId,
		title: newTitle
	};

	await updateData(updatedTaskObject)
		.catch(errorResponse(responseCodes.UPDATE_TASK_FAILED_IN_MODEL));

	return updatedTaskObject;
};

const deleteTask = async (taskId: string): Promise<void> => {
	await deleteData(taskId)
		.catch(errorResponse(responseCodes.DELETE_TASK_FAILED_IN_MODEL));
};

export {
	readTasks,
	createTask,
	updateTask,
	deleteTask,
};
