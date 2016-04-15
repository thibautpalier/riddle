// jshint esversion: 6
import Node from './Node';

export default class RevelationTree {

  constructor(persons, places){
    this.roots = [];

    this.persons = persons;
    this.places = places;
    this._moves = [...persons, places[1]];
  }

  giveMeTheSolution(){
    var promises = [];
    for(var i = 0; i < this._moves.length; i++){

      var node = new Node({
        persons : this.persons,
        places : this.places,
        iteration : i
      }, null, false);

      this.roots.push(node);
      promises.push(new Promise(node.exec.bind(node)));
    }

    for (var promise of promises) {
      promise.then(succes).catch(error);
    }

    function succes(model) {
      console.log('succes');
      return model;
    }
    function error(reason){
      console.log(reason);
      return reason;
    }

  }

  traverse(){
    return new Error(`Not implemented`);
  }

  add(node, toNodePath){
    return new Error(`Not implemented`);
  }

  remove(node){
    return new Error(`Not implemented`);
  }

  removeNodeAtPath(path){
    return new Error(`Not implemented`);
  }

}
