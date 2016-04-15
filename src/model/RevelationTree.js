// jshint esversion: 6
import Node from './Node';

export default class RevelationTree {

  constructor(persons, places){
    this.root = {};

    this.persons = persons;
    this.places = places;
  }

  giveMeTheSolution(){
    this.root = new Node({
      persons : this.persons,
      places : this.places
    }, null, false);
    var promise = new Promise(this.root.exec);
    promise.then(function(newModel){
      console.log(newModel);
      return newModel;
    }).catch(function(reason) {
      console.log(`Error : ${reason}`);
      return reason;
    });
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
