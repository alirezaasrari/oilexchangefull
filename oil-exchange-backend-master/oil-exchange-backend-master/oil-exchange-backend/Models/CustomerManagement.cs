namespace oil_exchange_backend.Models
{
    public class CustomerManagement
    {
        public int Id { get; set; }
        public string Plaque { get; set; } = string.Empty;
        public DateTime Servicedate { get; set; } = DateTime.Now;
        public string Engineoil { get; set; } = string.Empty;
        public string Gearboxoil { get; set; } = string.Empty;
        public string Cabinfilter { get; set; } = string.Empty;
        public string Oilfilter { get; set; } = string.Empty;
        public string Airfilter { get; set; } = string.Empty;
        public string Petrolfilter { get; set; } = string.Empty;
        public string Breakeoil { get; set; } = string.Empty;
        public string Untifreez { get; set; } = string.Empty;
        public string Previouskilometer { get; set; } = string.Empty;
        public string Nextkilometer { get; set; } = string.Empty;
        public string? Hydraulicoil { get; set; } = string.Empty;
        public int Userid { get; set; }

    }
}
