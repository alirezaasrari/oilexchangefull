using System.ComponentModel.DataAnnotations;

namespace oil_exchange_backend.Models
{
    public class ResetPass
    {
        public string Token { get; set; } = string.Empty;
        public string Pass { get; set; } = string.Empty;
    }
}
