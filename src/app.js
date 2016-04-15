/*

Devinette malienne : 3 sorcières avec chacune 1 enfant se trouvent au bord d’un
fleuve qu’elles veulent traverser. Elles ne peuvent traverser qu’à l’aide d’une
barque qui ne peut se déplacer qu’avec 1 ou 2 personnes à son bord. Si une
sorcière se trouve au même endroit (bord du fleuve ou bateau) qu’un autre enfant
qui ne soit pas le sien et que sa mère n’est pas présente, elle le mange.
Comment doivent-elles procéder pour que tout le monde puisse arriver sain et
sauf de l’autre coté ?

*/
// jshint esversion: 6
import 'source-map-support/register';

import Witch from './model/Witch';
import Baby from './model/Baby';
import Bank from './model/Bank';
import Boat from './model/Boat';

(function main() {
    var witchA = new Witch('WitchA');
    var witchB = new Witch('WitchB');
    var witchC = new Witch('WitchC');
    var witchs = [witchA, witchB, witchC];

    var babyA = new Baby('BabyA', witchA);
    var babyB = new Baby('BabyB', witchB);
    var babyC = new Baby('BabyC', witchC);
    var babys = [babyA, babyB, babyC];

    var bankLeft = new Bank('BankLeft', [witchA, witchB, witchC, babyA, babyB, babyC]);
    var bankRight = new Bank('BankRight', []);
    var boat = new Boat('Boat', [], [bankLeft]);
    bankLeft.connectPlace(boat);
    var places = [bankLeft, boat, bankRight];

    babyB.moveTo(boat);
    witchB.moveTo(boat);
    boat.navigateTo(bankRight);
    babyB.moveTo(bankRight);
    boat.navigateTo(bankLeft);
    boat.navigateTo(bankRight);
    babyB.moveTo(boat);
    boat.navigateTo(bankLeft);
    babyB.moveTo(bankLeft);

    console.log(getModelStatusString());

    //return a human readable status string of the model
    function getModelStatusString() {
        var string = '';
        for (var place of places) {
            if (string.length > 0) {
                string = string + ' # ';
            }
            for (var i = 0; i < place.persons.length; i++) {
                string = string + place.persons[i].name;
                if (i < place.persons.length - 1) {
                    string = string + ' ';
                }
            }
        }
        return string;
    }

})();
