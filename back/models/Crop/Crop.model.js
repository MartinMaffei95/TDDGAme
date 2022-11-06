import { Crops } from '../../ObjectConfigurations/Crops/Crops.enum';
import { Parcel } from '../Parcel/Parcel.model';

export class Crop {
  constructor(parcelData, cropData) {
    this.water = parcelData.water;
    this.light = parcelData.light;
    this.nutrients = parcelData.nutrients;
    this.bugs = parcelData.bugs;
    this.fertilizedWhit = parcelData.fertilizedWhit;
    // ## crop data ##
    this.name = cropData.name;
    this.light_need = cropData.light_need;
    this.water_need = cropData.water_need;
    this.nutrient_need = cropData.nutrient_need;
    this.crop_id = cropData.id;
  }

  get allData() {
    return {
      water: this.water,
      light: this.light,
      nutrients: this.nutrients,
      bugs: this.bugs,
      fertilizedWhit: this.fertilizedWhit,
    };
  }

  cultivate() {
    const cropGrown = Crops.find((crop) => this.crop_id === crop.id);
    return cropGrown;
  }
}
