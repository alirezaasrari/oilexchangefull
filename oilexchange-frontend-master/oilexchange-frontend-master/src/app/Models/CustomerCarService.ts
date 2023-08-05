import ICustomerCarService from "../InterFaces/ICustomerCarService";

export default class CustomerCarService implements ICustomerCarService{
    id?: number | undefined;
    hydraulicoil: string;
    plaque = '';
    servicedate = '';
    engineoil='';
    gearboxoil = '';
    cabinfilter = '';
    oilfilter = '';
    airfilter = '';
    petrolfilter = '';
    breakeoil = '';
    untifreez = '';
    previouskilometer = '';
    nextkilometer = "";
    userid = 0
    
}