using System;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;

namespace BattleArena
{
    public static class Game
    {
        private static ArenaEngine engine;

        static Game()
        {
            engine = new ArenaEngine(20);
        }

        public static void PassContext(IHubContext context)
        {
            engine.SetContext(context);
        }

        internal static void AddPlayer(string connectionId)
        {
            engine.AddPlayer(connectionId);
        }

        internal static void AddPlayerName(string username, string connectionId)
        {
            engine.AddPlayerName(username, connectionId);
        }

        internal static void PlayerMoved(int x, string conId)
        {
            engine.PlayerMoved(x, conId);
        }
    }
}
