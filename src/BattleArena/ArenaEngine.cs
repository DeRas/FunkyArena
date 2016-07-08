using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BattleArena.Hubs;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using Microsoft.AspNetCore.SignalR;

namespace BattleArena
{
    public class ArenaEngine
    {
        public int BoardSize { get; private set; }
        private IHubContext _context;
        private Dictionary<string, Player> playerDict;
        private Random rand;

        private IBoardElement[,] board;

        public ArenaEngine(int boardSize)
        {
            BoardSize = boardSize;
            playerDict = new Dictionary<string, Player>();
            board = new IBoardElement[boardSize, boardSize];
            rand = new Random();
        }

        internal void AddPlayerName(string username, string connectionId)
        {
            if (playerDict.ContainsKey(connectionId))
            {
                Player player = playerDict[connectionId];
                player.UserName = username;
                PlacePlayer(player);
            }

        }

        internal void PlayerMoved(int x, string conId)
        {
            if (playerDict.ContainsKey(conId))
            {
                Player player = playerDict[conId];
                switch (x)
                {
                    case 1:
                        player.y--;
                        break;
                    case 2:
                        player.y++;
                        break;
                    case 3:
                        player.x--;
                        break;
                    case 4:
                        player.x++;
                        break;
                    default:
                        throw new Exception();

                }
                _context.Clients.All.playerMove(player);
                Console.WriteLine(player.UserName + " moved");
            }
        }

        private void PlacePlayer(Player player)
        {
            bool placed = false;
            int x = 0;
            int y = 0;
            while (!placed)
            {
                x = rand.Next(BoardSize);
                y = rand.Next(BoardSize);
                if (board[x, y] == null)
                {
                    board[x, y] = player;
                    player.x = x;
                    player.y = y;
                    placed = true;
                }
            }

            _context.Clients.All.playerMove(player);

        }

        public void AddPlayer(string connectionId)
        {
            playerDict.Add(connectionId, new BattleArena.Player(connectionId));
            _context.Clients.Client(connectionId).initBoard(BoardSize);
        }

        public void SetContext(IHubContext context)
        {
            _context = context;
        }


    }

    struct BoardLocation
    {
        int x;
        int y;
    }
}
