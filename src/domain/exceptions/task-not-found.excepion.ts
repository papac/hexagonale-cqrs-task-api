class TaskNotFoundException extends Error {
  constructor() {
    super()
    this.message = "Task not found exception"
  }
}