// jshint esversion: 6
export default class Place {
  constructor(name, persons, connectedPlaces) {
    this._capacity = 6;
    this.name = name;
    this.persons = persons || [];
    this.connectedPlaces = connectedPlaces || [];
    this._setCurrentPlaceOfPersons(this.persons);
  }

  connectPlace(place){
    var index = this.connectedPlaces.indexOf(place);
    if(index === -1){
      return this.connectedPlaces.push(place);
    }
    else {
      return false;
    }
  }

  disconnectPlace(place){
    var index = this.connectedPlaces.indexOf(place);
    if(index !== -1){
      return this.connectedPlaces.splice(index, 1);
    }
    else {
      return false;
    }
  }

  addPerson(person){
    if(this.capacity > this.persons.length){
      this.persons.push(person);
      return true;
    }
    else {
      return false;
    }
  }

  removePerson(person){
    var index = this.persons.indexOf(person);
    if(index !== -1){
      return this.persons.splice(index, 1);
    }
    else {
      return false;
    }
  }

  isConnectedTo(place){
    if(this.connectedPlaces.indexOf(place) !== -1){
      return true;
    }
    else {
      return false;
    }
  }

  _setCurrentPlaceOfPersons(persons){
    for (var person of persons) {
      person.currentPlace = this;
    }
  }

  get capacity(){
    return this._capacity;
  }
  set capacity(capacity){
    this._capacity = capacity;
  }

  get persons(){
    return this._persons;
  }
  set persons(persons){
    this._persons = persons;
    this._setCurrentPlaceOfPersons(this.persons);
  }

  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }

  get connectedPlaces(){
    return this._connectedPlaces;
  }
  set connectedPlaces(connectedPlaces){
    this._connectedPlaces = connectedPlaces;
  }
}
