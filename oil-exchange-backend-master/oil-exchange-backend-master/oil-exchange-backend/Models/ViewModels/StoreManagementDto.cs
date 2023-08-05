namespace oil_exchange_backend.Models.ViewModels
{
    public class StoreManagementDto
    {
        public int Userid { get; set; }

        public int Engineoilbuyed { get; set; }
        public int Engineoilselled { get; set; }

        public int Gearboxoilbuyed { get; set; }
        public int Gearboxoilselled { get; set; }

        public int Cabinfilterbuyed { get; set; }
        public int Cabinfilterselled { get; set; }

        public int Oilfilterbuyed { get; set; }
        public int Oilfilterselled { get; set; }

        public int Airfilterbuyed { get; set; }
        public int Airfilterselled { get; set; }

        public int Petrolfilterbuyed { get; set; }
        public int Petrolfilterselled { get; set; }

        public int Breakeoilbuyed { get; set; }
        public int Breakeoilselled { get; set; }

        public int Untifreezbuyed { get; set; }
        public int Untifreezselled { get; set; }
        
        public int Hydraulicoilbuyed { get; set; }
        public int Hydraulicoilselled { get; set; }
    }
}
