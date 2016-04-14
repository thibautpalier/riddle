// jshint esversion: 6
export default class Person {
  constructor(name, currentPlace) {
    this.name = name;
    this.currentPlace = currentPlace;
  }

  moveTo(place){
    if(this.currentPlace.isConnectedTo(place)){
      if(place.addPerson(this)){
        this.currentPlace.removePerson(this);
        this.currentPlace = place;
      }
      else {
        throw new Error(`Cant move ${this.name} to ${place.name}, ${place.name} is full`);
      }
    }
    else {
      throw new Error(`Cant move ${this.name} to ${place.name}, unconnected places`);
    }
  }

  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }

  get currentPlace(){
    return this._currentPlace;
  }
  set currentPlace(currentPlace){
    this._currentPlace = currentPlace;
  }
}
