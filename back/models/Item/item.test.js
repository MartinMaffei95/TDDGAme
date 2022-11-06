import { describe, expect, it } from 'vitest';
import { Food } from '../../ObjectConfigurations/Items/Food/items_food.enum';
import { Item } from './item.model';

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

describe('Generic item', () => {
  //## test deprecated.
  it('should be a function', () => {
    expect(typeof Item).toBe('function');
  });

  it('the item should have a sale price', () => {
    const item = new Item(Food[1]);
    expect(item.salePrice).toBe(3);
    expect(item.salable).toBe(true);
  });

  it('the item should have a purchase price', () => {
    const item = new Item(Food[1]);
    expect(item.purchasePrice).toBe(10);
    expect(item.purchasable).toBe(true);
  });

  // ## item impossible to buy

  // it('the item shouldnt have a sale price', () => {
  //   const item = new Item(Food[999]);
  //   expect(item.salePrice).toBe(null);
  //   expect(item.salable).toBe(false);
  // });

  // it('the item shouldnt have a purchase price', () => {
  //   const item = new Item(Food[999]);
  //   expect(item.purchasePrice).toBe(null);
  //   expect(item.purchasable).toBe(false);
  // });
});
