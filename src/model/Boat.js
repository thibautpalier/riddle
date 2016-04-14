// jshint esversion: 6
import Place from 'Place';

export default class Boat extends Place {
  constructor(name, persons, connectedPlaces) {
    if(connectedPlaces.length > 1){
       throw new Error('You cant connect multiple place to a boat');
    }
    if(!(connectedPlaces[0] instanceof Bank)){
      throw new Error('Boat can only be connected to a bank');
    }
    super(name, persons, connectedPlaces);
    this._capacity = 2;
    this.currentBank = connectedPlaces[0];
  }

  connectPlace(place){
    if(this.connectedPlaces.length > 1){
       throw new Error('You cant connect multiple place to a boat');
    }
    super.connectPlace(place);
  }

  navigateTo(place){
    if(this.persons.length < 1){
      throw new Error('At least one person should be on the boat to navigate');
    }
    if(place instanceof Bank){
      if(!this.isConnectedTo(place)){
        this.disconnectPlace(this.currentBank);
        this.currentBank.disconnectPlace(this);

        this.connectPlace(place);
        place.connectPlace(this);

        this.currentBank = place;

        return true;
      }
      else {
        throw new Error('Boat are allready on this Bank');
      }
    }
  }

  get currentBank(){
    return this._currentBank;
  }
  set currentBank(currentBank){
    this._currentBank = currentBank;
  }
}
