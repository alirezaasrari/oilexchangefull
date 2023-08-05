namespace oil_exchange_backend.Models
{
    public class Promoted
    {
        public int Id { get; set; }
        public int Userid { get; set; }
        public DateTime Promoteddate { get; set; } = DateTime.Now;
    }
}
