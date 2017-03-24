module.exports = Worker;

function Worker() {}

Worker.prototype.job = function ($happn, callback) {
  callback(null, 'WORKER');
};
