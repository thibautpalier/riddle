// jshint esversion: 6
import Person from 'Person';

export default class Witch extends Person {
  constructor(name) {
    super(name);
  }

  eat(){
    for(var person of this.currentPlace.persons){
      if(person instanceof Baby){
        var baby = person;
        var mummyWitch = baby.mummyWitch;
        if(mummyWitch !== this && !baby.isMummyHere()){
          return true;
        }
      }
    }
    return false;
  }

}
