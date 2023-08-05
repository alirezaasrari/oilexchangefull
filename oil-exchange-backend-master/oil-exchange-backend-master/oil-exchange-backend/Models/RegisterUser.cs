namespace oil_exchange_backend.Models
{
    public class RegisterUser
    {
        public int Id { get; set; }
        public DateTime Registereddate { get; set; } = DateTime.Now;
        public byte[] PassHash { get; set; } = new byte[32];
        public byte[] PassSalt { get; set; } = new byte[32];
        public string Phonenumber { get; set; } = string.Empty;
        public string Storename { get; set; } = string.Empty;
        public string? Resetpasstoken { get; set; } = string.Empty;
        public DateTime? Resetpasstokenexpire { get; set; }
    }
}
