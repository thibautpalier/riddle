// jshint esversion: 6
import Person from './Person';

export default class Baby extends Person {
  constructor(name, mummyWitch) {
    super(name);
    this.mummyWitch = mummyWitch;
  }

  isMummyHere(){
    if(this.mummyWitch.currentPlace === this.currentPlace){
      return true;
    }
    else {
      return false;
    }
  }

  get mummyWitch(){
    return this._mummyWitch;
  }
  set mummyWitch(mummyWitch){
    this._mummyWitch = mummyWitch;
  }
}
