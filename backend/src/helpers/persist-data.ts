import { readFile, existsSync, writeFile } from 'fs';
import { promisify } from 'util';
import logger from './logger';
import { Task } from '../interfaces';

const asyncReadFile = promisify(readFile);
const asyncWriteFile = promisify(writeFile);

const PATH = `${__dirname}/../db.json`;

const writeData = async (data: Task[]): Promise<void> => {
	await asyncWriteFile(
		PATH,
		JSON.stringify(data),
		'utf8'
	).catch(error => logger.log(error));
}

const readData = async (): Promise<Task[]> => {
	if (!existsSync(PATH)) {
		await writeData([]);
	}

	const data: any = await asyncReadFile(PATH).catch(error => logger.log(error));

	if (data) {
		return JSON.parse(data.toString('utf8'));
	}

	return [];
};

const createData = async (newData: Task): Promise<void> => {
	if (!existsSync(PATH)) {
		return await writeData([newData]);
	}

	await writeData([
		...await readData(),
		newData
	]);
};

const updateData = async (updatedTaskObject: Task): Promise<void> => {
	if (!existsSync(PATH)) {
		return;
	}

	const { id, title } = updatedTaskObject;

	const oldTasks: Task[] = await readData();
	const newTasks: Task[] = oldTasks.reduce((tasks: Task[], item: Task) => {
		if (item.id === id) {
			return [
				...tasks,
				{
					id,
					title
				}
			]
		}
		return [
			...tasks,
			item
		];
	}, []);

	await writeData(newTasks);
};

const deleteData = async (id: string): Promise<void> => {
	if (!existsSync(PATH)) {
		return;
	}

	const oldTasks: Task[] = await readData();
	const newTasks: Task[] = oldTasks.reduce((tasks: Task[], item: Task) => {
		if (item.id === id) {
			return tasks;
		}
		return [
			...tasks,
			item
		];
	}, []);

	await writeData(newTasks);
};

export {
	readData,
	createData,
	updateData,
	deleteData
};

