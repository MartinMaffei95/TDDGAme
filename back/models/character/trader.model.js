import { Character } from './character.model';

export class Trader extends Character {
  // #gold;

  constructor(gold = 200, inventory = []) {
    super(gold, inventory);
  }

  //#############
  //## setters ##
  //#############
  // ## character buy a item from trader

  sellItem(itemId, quantity) {
    //getting a item
    const { item, error } = this.giveItem(itemId, quantity);
    if (!error) return this.addGold(item.item.traderPrice * quantity);
    if (error === 'NO_MORE_ITEMS')
      return this.addGold(item.item.traderPrice * item.quantity);
  }
  // ## character sold a item from trader
  buyItem(itemId, quantity) {
    //getting a item
    const { item } = this.takeItem(itemId, quantity);
    this.subtractGold(item.characterPrice);
  }
}
