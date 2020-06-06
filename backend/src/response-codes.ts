const responseCodes = {
	SUCCESS: {
		code: 2000,
		status: 200,
		text: 'Success',
	},
	E_UNKNOWN: {
		code: 4000,
		status: 500,
		text: 'Unknown error',
		logFunction: 'error',
	},
	E_BODY: {
		code: 4001,
		status: 400,
		text: 'Body parsing error',
	},
	NO_TASK: {
		code: 4002,
		status: 400,
		text: 'string task missing in the request',
	},
	NO_TASK_ID: {
		code: 4003,
		status: 400,
		text: 'task id missing in the request',
	},
	NO_TASK_ID_AND_TITLE: {
		code: 4004,
		status: 400,
		text: 'task id and new title missing in the request',
	},
	CREATE_TASK_FAILED_IN_MODEL: {
		code: 4005,
		status: 400,
		text: 'create task failed in model',
	},
	READ_TASK_FAILED_IN_MODEL: {
		code: 4006,
		status: 400,
		text: 'read task failed in model',
	},
	UPDATE_TASK_FAILED_IN_MODEL: {
		code: 4007,
		status: 400,
		text: 'update task failed in model',
	},
	DELETE_TASK_FAILED_IN_MODEL: {
		code: 4008,
		status: 400,
		text: 'delete task failed in model',
	},
};

export default responseCodes;