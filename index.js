module.exports = Worker;


function Worker() {
}


Worker.prototype.job = function ($happn, callback) {

  var meshName = $happn.info.mesh.name;
  var componentName = $happn.name;
  var componentVersion = $happn.exchange[componentName].__version;

  callback(null, meshName + ':' + componentName + ':' + componentVersion);

};
