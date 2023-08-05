import ICarServiesCollection from '../InterFaces/ICarServiesColletion';
export class CarServiesCollection implements ICarServiesCollection {
  default = "انتخاب کنید";
  EngineOilName = 'روغن موتور';
  GearBoxOilName = 'روغن گیربکس';
  BrakeOilName = 'روغن ترمز';
  CabinFilterName = 'فیلتر کابین';
  OilFilterName = 'فیلتر روغن';
  AirFilterName = 'فیلتر هوا';
  PetrolFilterName = 'فیلتر بنزین';
  UntiFreezeName = 'ضد یخ';
  PreviouseKilometer = 'کیلومتر قبلی';
  NextKilometer = 'کیلومتر بعدی';
  hydraulicoil = 'روغن هیدرولیک';
}
