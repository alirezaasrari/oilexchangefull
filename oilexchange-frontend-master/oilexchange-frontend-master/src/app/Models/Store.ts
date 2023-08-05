import IStore from "../InterFaces/IStore";

export class Store implements IStore{
    engineoilselled = 0;
    engineoilbuyed = 0 ;

    gearboxoilselled = 0
    gearboxoilbuyed = 0;

    cabinfilterselled = 0;
    cabinfilterbuyed = 0;

    oilfilterselled = 0;
    oilfilterbuyed = 0; 

    airfilterselled = 0;
    airfilterbuyed = 0;

    petrolfilterselled = 0;
    petrolfilterbuyed = 0;

    breakeoilselled = 0;
    breakeoilbuyed = 0;

    untifreezselled = 0;
    untifreezbuyed = 0;

    hydraulicoilselled = 0;
    hydraulicoilbuyed = 0;

    registereddate: Date = new Date();
    userid = 0;  
}