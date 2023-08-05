namespace oil_exchange_backend.Models.ViewModels
{
    public class PromotedDto
    {
        public int Userid { get; set; }
        public DateTime Promoteddate { get; set; } = DateTime.Now;
    }
}
