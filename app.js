// event loop

// event loop is concept of asysnchronous programing

const name = "rekha";

console.log(name);

for (let i = 0; i < 2; i++) {
  console.log(i);
}

console.log("end rekha");

console.log("start");

setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}, 1000);

console.log("end");

// The event loop continuously checks the call stack for tasks to execute. When a task is encountered, it's added to the call stack for execution. If there are asynchronous tasks (like the callback passed to setTimeout), the event loop doesn't block the program. Instead, it moves them to the appropriate queue (e.g., the "task queue" or "microtask queue") when they are ready to be executed. When the call stack is empty, the event loop picks tasks from these queues and pushes them onto the call stack for execution.
