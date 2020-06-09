import { getTasks, addTask, editTask, removeTask } from '../../../src/controllers/tasks-controller';
import { Task } from '../../../src/interfaces';

jest.mock('../../../src/repositories/task-repository', () => ({
    readTasks: jest.fn().mockImplementation(async () => [
        {
            id: '289b0d16-e06d-4a71-a0dd-5d67e24dae7f',
            title: 'sample_item_1',
        },
        {
            id: '289b0d16-e06d-4a71-a0dd-123iui4342iu',
            title: 'sample_item_2',
        },
    ]),
    createTask: jest.fn().mockImplementation(async (newTask: Task) => newTask),
    updateTask: jest.fn().mockImplementation(async (id: string, title: string) => ({
        id,
        title,
    })),
    deleteTask: jest.fn().mockImplementation(async () => ({})),
}));

import * as taskRepository from '../../../src/repositories/task-repository';

interface Req {
    data?: Task[];
    body?: {
        task?: Task;
        title?: string;
    };
    params?: {
        id?: string;
    };
}

describe('task-contrroller', () => {
    let next: any;
    let readTasksSpyOn: any;
    let createTaskSpyOn: any;
    let updateTaskSpyOn: any;
    let deleteTaskSpyOn: any;

    beforeAll(() => {
        next = jest.fn();
        readTasksSpyOn = jest.spyOn(taskRepository, 'readTasks');
        createTaskSpyOn = jest.spyOn(taskRepository, 'createTask');
        updateTaskSpyOn = jest.spyOn(taskRepository, 'updateTask');
        deleteTaskSpyOn = jest.spyOn(taskRepository, 'deleteTask');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getTasks', () => {
        it('should return all tasks as expected', async () => {
            const req: Req = { data: [] };

            await getTasks(req, null, next);

            expect(readTasksSpyOn).toHaveBeenCalledTimes(1);

            expect(req.data).toEqual([
                {
                    id: '289b0d16-e06d-4a71-a0dd-5d67e24dae7f',
                    title: 'sample_item_1',
                },
                {
                    id: '289b0d16-e06d-4a71-a0dd-123iui4342iu',
                    title: 'sample_item_2',
                },
            ]);

            expect(next.mock.calls.length).toBe(1);
        });
    });

    describe('addTask', () => {
        it('should add new task', async () => {
            const newTask = {
                id: '289b0d16-e06d-4a71-a0dd-123kjjweoi2',
                title: 'sample_new_task_title',
            };

            const req: Req = {
                body: {
                    task: newTask,
                },
            };

            await addTask(req, null, next);

            expect(createTaskSpyOn).toHaveBeenCalledTimes(1);

            expect(req.data).toEqual(newTask);

            expect(next.mock.calls.length).toBe(1);
        });

        it('should return next if body is null', async () => {
            const req: Req = {
                body: {
                    task: null,
                },
            };

            await addTask(req, null, next);

            expect(createTaskSpyOn).toHaveBeenCalledTimes(0);

            expect(req.data).toEqual(undefined);

            expect(next.mock.calls.length).toBe(1);
        });
    });

    describe('editTask', () => {
        it('should edit task', async () => {
            const id = '289b0d16-e06d-4a71-a0dd-123kjjweo45';
            const title = 'title_for_update';
            const req: Req = {
                body: { title },
                params: { id },
            };

            await editTask(req, null, next);

            expect(updateTaskSpyOn).toHaveBeenCalledTimes(1);

            expect(req.data).toEqual({
                id,
                title,
            });

            expect(next.mock.calls.length).toBe(1);
        });

        it('should return next if id not provided', async () => {
            const title = 'title_for_update';
            const req: Req = {
                body: { title },
                params: {},
            };

            await editTask(req, null, next);

            expect(updateTaskSpyOn).toHaveBeenCalledTimes(0);

            expect(req.data).toEqual(undefined);

            expect(next.mock.calls.length).toBe(1);
        });

        it('should return next if title not provided', async () => {
            const id = '289b0d16-e06d-4a71-a0dd-123kjjweo45';
            const req: Req = {
                body: {},
                params: { id },
            };

            await editTask(req, null, next);

            expect(updateTaskSpyOn).toHaveBeenCalledTimes(0);

            expect(req.data).toEqual(undefined);

            expect(next.mock.calls.length).toBe(1);
        });
    });

    describe('removeTask', () => {
        it('should delete', async () => {
            const id = '289b0d16-e06d-4a71-a0dd-123kjjweo990';
            const req: Req = {
                params: { id },
            };

            await removeTask(req, null, next);

            expect(deleteTaskSpyOn).toHaveBeenCalledTimes(1);

            expect(next.mock.calls.length).toBe(1);
        });

        it('should return next if id not provided', async () => {
            const req: Req = {
                params: {},
            };

            await removeTask(req, null, next);

            expect(deleteTaskSpyOn).toHaveBeenCalledTimes(0);

            expect(next.mock.calls.length).toBe(1);
        });
    });
});
