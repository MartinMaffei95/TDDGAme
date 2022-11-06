export class Item {
  #title;
  #characterPrice;
  #traderPrice;
  #salable;
  #purchasable;

  constructor(itemData) {
    this.#title = itemData.title;
    this.#characterPrice = itemData.characterPrice;
    this.#traderPrice = itemData.traderPrice;
    this.#salable = itemData.characterPrice === null ? false : true;
    this.#purchasable = itemData.traderPrice === null ? false : true;
  }

  //## getters

  get title() {
    return this.#title;
  }

  get salePrice() {
    return this.#characterPrice;
  }

  get purchasePrice() {
    return this.#traderPrice;
  }

  get salable() {
    return this.#salable;
  }

  get purchasable() {
    return this.#purchasable;
  }

  //## setter
}
