import { describe, expect, it } from 'vitest';
import { Food } from '../../ObjectConfigurations/Items/Food/items_food.enum';
import { MainCharacter } from './mainCharacter.model';
/*
Personaje debe tener oro y obtenerlo del cofre
*/

const mainCharacter = new MainCharacter(
  200,
  [
    // initial
    { item: Food[0], quantity: 2 },
    { item: Food[1], quantity: 3 },
  ],
  100
);

const inventoryAfterSell = [{ item: Food[1], quantity: 3 }];

const inventoryAfterBuy = [
  { item: Food[1], quantity: 3 },
  { item: Food[0], quantity: 1 },
];

console.log(mainCharacter.allData);

describe('Main Character', () => {
  // it('character eat and obtain "hungry"', () => {
  //   mainCharacter.eat(Food[1]);
  //   expect(mainCharacter.hungry).toBe(110);
  // });

  // sell item
  it('character sell a item to a trader', () => {
    mainCharacter.sellItem(Food[0].id, 4);
    expect(mainCharacter.inventory).toStrictEqual(inventoryAfterSell);
    expect(mainCharacter.gold).toBe(202);
  });

  // buy item
  it('character buy a item from a trader', () => {
    mainCharacter.buyItem(Food[0].id, 1);
    expect(mainCharacter.inventory).toStrictEqual(inventoryAfterBuy);
    expect(mainCharacter.gold).toBe(200);
  });
});
