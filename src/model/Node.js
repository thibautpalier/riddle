// jshint esversion: 6
export default class Node {

  constructor(model, parent, autoRun){
    if(parent){
      this.path = parent.path + '#' + this.guid();
    }
    else {
      this.path = this.guid();
    }
    this.model = model;
    this.parent = parent;
    this.children = [];


    autoRun = autoRun ? true : autoRun;
    if(autoRun){
      exec();
    }
  }

  exec(resolve, reject){
    var self = this;
    var p1 = new Promise(self.makeAMove);
    p1.then(nextMove).catch(stop);

    function nextMove(newModel) {

      var promises = [];
      for (var i = 0; i < self.persons.length; i++) {
        var newChildNode = new Node(newModel, self);
        promises.push(new Promise(newChildNode.exec));
      }
      Promise.all(promises).then(function(newModel){
        resolve(newModel);
      }).catch(function(reason) {
        reject(reason);
      });

    }

    function stop(reason){
      reject(reason);
    }
  }

  makeAMove(resolve, reject){
    // reject(`not yet`);
    resolve(this.model);
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  get model(){
    return this._model;
  }
  set model(model){
    this._model = model;
  }

  get parent(){
    return this._parent;
  }
  set parent(parent){
    this._parent = parent;
  }

  get children(){
    return this._children;
  }
  set children(children){
    this._children = children;
  }

  get path(){
    return this._path;
  }
  set path(path){
    this._path = path;
  }


}
