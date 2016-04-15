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

    this._moves = [...model.persons, model.places[1]];
    autoRun = autoRun ? true : autoRun;
    if(autoRun){
      exec();
    }
  }

  exec(resolve, reject){
    var p1 = new Promise(makeAMove.bind(this));
    p1.then(nextMove.bind(this)).catch(stop);

    function nextMove(newModel) {
      var self = this;
      var promises = [];
      for (var i = 0; i < self._moves.length; i++) {
        var newChildNode = new Node(newModel, self);
        promises.push(new Promise(newChildNode.exec.bind(newChildNode)));
      }

      for (var promise of promises) {
        promise.then(succes).catch(error);
      }

      function succes(model) {
        resolve(model);
      }
      function error(reason){
        reject(reason);
      }

    }

    function makeAMove(resolve, reject){
      //riddle logic here with iteration

      resolve(this.model);
    }

    function stop(reason){
      reject(reason);
    }
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
