import {
	readTasks,
	createTask,
	updateTask,
	deleteTask,
} from '../repositories/task-repository';
import responseCodes from '../response-codes';
import { ErrorWithProps } from '../helpers/error-response';

const getTasks = async (req: any, res: any, next: any) => {
	req.data = await readTasks();

	return next();
};

const addTask = async (req: any, res: any, next: any) => {
	const newTask: string | null = req.body.task || null;

	if (!newTask) {
		return next(new ErrorWithProps(responseCodes.NO_TASK));
	}

	req.data = await createTask(newTask);

	return next();
};

const editTask = async (req: any, res: any, next: any) => {
	const taskId: string | null = req.params.id || null;
	const newTitle: string | null = req.body.title || null;

	if (!taskId || !newTitle) {
		return next(new ErrorWithProps(responseCodes.NO_TASK_ID_AND_TITLE));
	}

	req.data = await updateTask(taskId, newTitle);

	return next();
};

const removeTask = async (req: any, res: any, next: any) => {
	const taskId: string = req.params.id;

	if (!taskId) {
		return next(new ErrorWithProps(responseCodes.NO_TASK_ID));
	}

	await deleteTask(taskId);

	return next();
};

export {
	getTasks,
	addTask,
	editTask,
	removeTask,
};
