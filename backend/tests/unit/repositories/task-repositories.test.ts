import {
	readTasks,
	createTask,
	updateTask,
	deleteTask,
} from '../../../src/repositories/task-repository';

jest.mock('../../../src/helpers/persist-data', () => ({
	readData: jest.fn().mockImplementation(async () => ([
		{
			id: '289b0d16-e06d-4a71-a0dd-5d67e24dae7f',
			title: 'sample_item_1'
		},
		{
			id: '289b0d16-e06d-4a71-a0dd-123iui4342iu',
			title: 'sample_item_2'
		}
	])),
	createData: jest.fn()
		.mockImplementationOnce(async (title: string) => ({
			id: '289b0d16-e06d-4a71-a0dd-123iui434pp9',
			title
		})),
	updateData: jest.fn()
		.mockImplementationOnce(async (id: string, newTitle: string) => ({
			id,
			title: newTitle
		})),
	deleteData: jest.fn()
		.mockImplementationOnce(async (id: string) => ({})),
}));

import * as persistData from '../../../src/helpers/persist-data';

describe('task-repositories', () => {
	let readDataSpyOn: any;
	let createDataSpyOn: any;
	let updateDataSpyOn: any;
	let deleteDataSpyOn: any;

	beforeAll(() => {
		readDataSpyOn = jest.spyOn(persistData, 'readData');
		createDataSpyOn = jest.spyOn(persistData, 'createData');
		updateDataSpyOn = jest.spyOn(persistData, 'updateData');
		deleteDataSpyOn = jest.spyOn(persistData, 'deleteData');
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('readTasks', () => {
		it('should return all tasks', async () => {
			const tasks = await readTasks();

			expect(readDataSpyOn).toHaveBeenCalledTimes(1);

			expect(tasks).toEqual([
				{
					id: '289b0d16-e06d-4a71-a0dd-5d67e24dae7f',
					title: 'sample_item_1'
				},
				{
					id: '289b0d16-e06d-4a71-a0dd-123iui4342iu',
					title: 'sample_item_2'
				}
			]);
		});
	});

	describe('createTask', () => {
		it('should create task with correct title as an input', async () => {
			const title = 'title_for_create';
			const tasks = await createTask(title);

			expect(createDataSpyOn).toHaveBeenCalledTimes(1);

			expect(tasks.title).toEqual(title);
		});
	});

	describe('updateTask', () => {
		it('should update task with new title as an input', async () => {
			const id = 'sample_id';
			const title = 'title_for_create';
			const tasks = await updateTask(id, title);

			expect(updateDataSpyOn).toHaveBeenCalledTimes(1);

			expect(tasks).toEqual({ id, title });
		});
	});

	describe('deleteTask', () => {
		it('should delete task with task id', async () => {
			const id = 'sample_id';
			const tasks = await deleteTask(id);

			expect(deleteDataSpyOn).toHaveBeenCalledTimes(1);
		});
	});
});