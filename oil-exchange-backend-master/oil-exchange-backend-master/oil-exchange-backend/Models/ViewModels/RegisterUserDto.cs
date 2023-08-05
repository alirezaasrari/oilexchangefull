using System.ComponentModel.DataAnnotations;

namespace oil_exchange_backend.Models.ViewModels
{
    public class RegisterUserDto
    {
        public string Phonenumber { get; set; } = string.Empty;
        public string Storename { get; set; } = string.Empty;
        public string Pass { get; set; } = string.Empty;
    }
}
