namespace BattleArena
{
    internal class Player : IBoardElement
    {
        private string _connectionId;

        public string UserName;
        public int x { get; set; }
        public int y { get; set; }

        public Player(string connectionId)
        {
            _connectionId = connectionId;
        }


        public string GetConId()
        {
            return _connectionId;
        }


    }
}