import { Items } from '../../ObjectConfigurations/Items/Items.enum';

export class Character {
  gold;
  inventory; //=> inventory = [{item:item, quantity:n}]

  constructor(gold = 0, inventory = []) {
    this.gold = gold;
    this.inventory = inventory;
  }

  //## getters

  get allData() {
    return {
      gold: this.gold,
      inventory: this.inventory,
    };
  }

  get gold() {
    return this.gold;
  }

  get inventory() {
    return this.inventory;
  }

  //## setters

  addGold(gold) {
    return (this.gold = this.gold + gold);
  }
  subtractGold(gold) {
    return (this.gold = this.gold - gold);
  }

  giveItem(itemId, quantity, to) {
    if (this.inventory.find((item) => item.item.id === itemId)) {
      for (let i = 0; i < this.inventory.length; i++) {
        const item = this.inventory[i];
        if (item.item.id === itemId) {
          //substract item of inventory
          if (item.quantity - quantity < 0) {
            this.inventory = this.inventory.filter((i) => i !== item);
            return { item, error: 'NO_MORE_ITEMS' };
          }
          if (item.quantity - quantity === 0) {
            this.inventory = this.inventory.filter((i) => i !== item);
            return { item, error: null };
          }
          item.quantity = item.quantity - quantity;

          return { item, error: null };
        }
      }
    }
    return;
  }

  takeItem(itemId, quantity, from) {
    if (this.inventory.find((item) => item.item.id === itemId)) {
      for (let i = 0; i < this.inventory.length; i++) {
        const item = this.inventory[i];
        if (item.item.id === itemId) {
          //adding item on inventory
          item.quantity = item.quantity + quantity;

          return item;
        }
      }
      return;
    } else {
      const theItem = Items.Food.find((item) => item.id === itemId);
      const newItemObj = { item: theItem, quantity: quantity };
      this.inventory.push(newItemObj);

      return newItemObj;
    }
  }

  // ## character buy a item from trader

  sellItem(itemId, quantity) {
    //getting a item
    const { item, error } = this.giveItem(itemId, quantity);
    if (!error) return this.addGold(item.item.characterPrice * quantity);
    if (error === 'NO_MORE_ITEMS')
      return this.addGold(item.item.characterPrice * item.quantity);
  }
  // ## character sold a item from trader
  buyItem(itemId, quantity) {
    //getting a item
    const { item } = this.takeItem(itemId, quantity);

    this.subtractGold(item.traderPrice);
  }
}
