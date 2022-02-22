export default class TaskNotFoundException extends Error {
	constructor(message?: string) {
		super();
		this.message = message || 'Task not found exception';
	}
}
