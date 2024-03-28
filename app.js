// events in node js
// events is built module in node js
const EventEmiter = require("events");

// invoke EventEmiter

const customEmitter = new EventEmiter();

// on- listen for an event
// emit - emit for an event

customEmitter.on("response", () => {
  console.log(`data recieved`);
});

customEmitter.on("res", (name, id) => {
  console.log(`data recieved of ${name} of id ${id}`);
});

customEmitter.on("response", () => {
  console.log(`hello`);
});

// we can create same string  of code as below also, but it will print
// the order of listen and emit of an event is matter here

customEmitter.emit("response");
customEmitter.emit("res", "rekha", 30);
