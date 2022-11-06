import { Crop } from '../Crop/Crop.model';

const initialConfig = {
  water: 1,
  light: 1,
  nutrients: 1,
  bugs: false,
  cultivated: false,
  actualCrop: null,
  fertilizedWhit: null,
};

export class Parcel {
  constructor(config = initialConfig, crop) {
    this.water = config.water;
    this.light = config.light;
    this.nutrients = config.nutrients;
    this.bugs = config.bugs;
    this.fertilizedWhit = config.fertilizedWhit;
    this.cultivated = crop ? true : false;
    this.actualCrop = crop ? new Crop(this.parcelData(), crop) : null;
  }

  get allData() {
    return {
      water: this.water,
      light: this.light,
      nutrients: this.nutrients,
      bugs: this.bugs,
      fertilizedWhit: this.fertilizedWhit,
      cultivated: this.cultivated,
      actualCrop: this.actualCrop,
    };
  }

  parcelData() {
    return {
      water: this.water,
      light: this.light,
      nutrients: this.nutrients,
      bugs: this.bugs,
      fertilizedWhit: this.fertilizedWhit,
    };
  }

  sow(crop) {
    this.cultivated = true;
    this.actualCrop = new Crop(this.parcelData(), crop);
  }

  cultivate() {
    const cropGrown = this.actualCrop.cultivate();
    this.cultivated = false;
    this.actualCrop = null;
    // return the grown crop only if have passed the pertinent time
    return cropGrown;
  }
}
