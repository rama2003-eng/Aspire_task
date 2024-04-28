
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}


const myEmitter = new MyEmitter();

const eventHandler = () => {
  console.log('Custom event occurred!');
};

myEmitter.on('customEvent', eventHandler);

myEmitter.emit('customEvent');

myEmitter.off('customEvent', eventHandler);




