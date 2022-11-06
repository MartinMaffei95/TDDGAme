import { describe, expect, it } from 'vitest';
import { Food } from '../../ObjectConfigurations/Items/Food/items_food.enum';
import { Trader } from './trader.model';

// {
//     title: 'Bread',
//     sale_price: 3,
//     purchase_price: 10,
//   } ==>Food[1]

// {
//     title: 'inpurchasable',
//     sale_price: null,
//     purchase_price: null,
//   }, ==>Food[2]

// const traderInventory = [
//   // initial
//   { item: Food[0], quantity: 2 },
//   { item: Food[1], quantity: 3 },
// ];

const traderInventoryAfterSell = [{ item: Food[1], quantity: 3 }];

const traderInventoryAfterBuy = [
  { item: Food[0], quantity: 2 },
  { item: Food[1], quantity: 3 },
  { item: Food[2], quantity: 1 },
];

const trader = new Trader(200, [
  // initial
  { item: Food[0], quantity: 2 },
  { item: Food[1], quantity: 3 },
]);
const otherTrader = new Trader(500, [
  // initial
  { item: Food[0], quantity: 2 },
  { item: Food[1], quantity: 3 },
]);

describe('Trader', () => {
  // it('should lose a item ', () => {
  //   otherTrader.giveItem(Food[0].id, 1);

  //   expect(otherTrader.inventory).toStrictEqual(traderInventoryAfterSell);
  // });

  it(`trader Sell a item and shoul
      modify inventory(substract quantity
      item) and gold(add quantity of gold)`, () => {
    otherTrader.sellItem(Food[0].id, 2);
    expect(otherTrader.inventory).toStrictEqual(traderInventoryAfterSell);
    expect(otherTrader.gold).toBe(504);
  });

  it(`should be error`, () => {
    expect(() => {
      otherTrader.sellItem(Food[0].id, 6);
    }).toThrow();
  });

  it('trader buy a item should lose money and take item*quantity', () => {
    trader.buyItem(Food[2].id, 1);
    expect(trader.inventory).toStrictEqual(traderInventoryAfterBuy);
    expect(trader.gold).toBe(197);
  });
});
