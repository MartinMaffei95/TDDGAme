import { Parcel } from '../Parcel/Parcel.model';
import { Character } from './character.model';

export class MainCharacter extends Character {
  #hungry;
  constructor(gold = 0, inventory, hungry = 100) {
    super(gold, inventory);
    this.#hungry = hungry;
    this.parcel = [new Parcel()];
  }

  //#############
  //## getters ##
  //#############
  get allData() {
    return { ...super.allData, hungry: this.#hungry };
  }

  get hungry() {
    return this.#hungry;
  }

  //#############
  //## setters ##
  //#############

  eat(food) {
    this.#hungry = this.#hungry + food.hungry_point;
  }
}
