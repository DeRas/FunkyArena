using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BattleArena.Hubs
{
    [HubName("funky")]
    public class GameHub : Hub
    {
        

        public void PlayerJoin(string username)
        {
            Game.AddPlayerName(username, Context.ConnectionId);
            Console.WriteLine($"!!!!!!!!!!!!! {username} !!!!!!!!!!!!!!");
        }


        public override Task OnConnected()
        {
            Game.AddPlayer(Context.ConnectionId);
            return null;
        }

        public void Movement(int x)
        {
            Game.PlayerMoved(x, Context.ConnectionId);
        }
    }
}
