import { describe, expect, it } from 'vitest';
import { Crops } from '../../ObjectConfigurations/Crops/Crops.enum';
import { Crop } from '../Crop/Crop.model';
import { Parcel } from './Parcel.model';

const parcelConfig = {
  water: 1,
  light: 5,
  nutrients: 1,
  bugs: true,
  cultivated: false,
  actualCrop: null,
  fertilizedWhit: null,
};

const parcelConfigWithLavender = {
  water: 1,
  light: 5,
  nutrients: 1,
  bugs: true,
  cultivated: true,
  fertilizedWhit: null,
  actualCrop: new Crop(
    { water: 1, light: 5, nutrients: 1, bugs: true, fertilizedWhit: null },
    Crops[0]
  ), // => Lavanda
};

const parcelConfigWithoutCrop = {
  water: 1,
  light: 5,
  nutrients: 1,
  bugs: true,
  cultivated: false,
  fertilizedWhit: null,
  actualCrop: null, // => Lavanda
};

const parcelConfig2 = {
  water: 5,
  light: 5,
  nutrients: 5,
  bugs: true,
  cultivated: true,
  fertilizedWhit: null,
  actualCrop: new Crop(
    { water: 5, light: 5, nutrients: 5, bugs: true, fertilizedWhit: null },
    Crops[0]
  ), // => Lavanda
};

const cropConfig = {};

describe('PARCEL CLASS TEST', () => {
  it('should be return parcel information', () => {
    const parcel1 = new Parcel(parcelConfig);
    expect(parcel1.allData).toStrictEqual(parcelConfig);
  });

  // CROP
  it('should be return parcel information whit crop', () => {
    const parcel2 = new Parcel(parcelConfig2, Crops[0]);
    expect(parcel2.allData).toStrictEqual(parcelConfig2);
  });

  it('should be return parcel information whit lavander', () => {
    const cleanParce = new Parcel(parcelConfig);
    cleanParce.sow(Crops[0]);
    expect(cleanParce.allData).toStrictEqual(parcelConfigWithLavender);
  });

  it('should be return parcel information whitout crop', () => {
    const cleanParce = new Parcel(parcelConfig);
    cleanParce.sow(Crops[0]);
    cleanParce.cultivate();
    expect(cleanParce.allData).toStrictEqual(parcelConfigWithoutCrop);
  });

  it(' should be return parcel information whitout crop and return growing crop', () => {
    const cleanParce = new Parcel(parcelConfig);
    cleanParce.sow(Crops[0]);
    expect(cleanParce.cultivate()).toBe(Crops[0]);
    expect(cleanParce.allData).toStrictEqual(parcelConfigWithoutCrop);
  });
});
